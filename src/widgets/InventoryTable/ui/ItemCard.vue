<template>
  <div class="card">
    <div
      class="card__slot"
      :class="{
        'card__slot--selected': isSelected,
        'card__slot--empty': !hasColor,
        'card__slot--interactive': canInteract,
      }"
      :draggable="canInteract"
      :role="canInteract ? 'button' : undefined"
      :tabindex="canInteract ? 0 : undefined"
      :aria-label="hasColor ? ariaLabel : undefined"
      :aria-pressed="canInteract ? isSelected : undefined"
      @dragstart="onDragStart"
      @dragover="onDragOver"
      @dragend="onDragEnd"
      @click="onSelect"
      @keydown="onKeydown"
    >
      <template v-if="hasColor">
        <div
          class="card__glass"
          :style="{ backgroundColor: colorWithAlpha }"
        />
        <div
          class="card__color"
          :style="{ backgroundColor: item.name ?? undefined }"
        />
        <div v-if="item.quantity !== null" class="card__quantity">
          {{ item.quantity }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue'
import { hexToRGBA } from '@/shared/utils/colorUtils'
import type { InventoryItem } from '@/shared/types/inventory'

const props = withDefaults(
  defineProps<{
    item: InventoryItem
    index: number
    isSelected?: boolean
    /** Можно ли тащить/выбирать карточку. В превью плашки выключаем. */
    interactive?: boolean
  }>(),
  {
    isSelected: false,
    interactive: true,
  },
)

const emit = defineEmits<{
  dragstart: [index: number]
  dragover: [index: number]
  dragend: []
  click: [index: number]
}>()

const hasColor = computed(() => Boolean(props.item.name))
const canInteract = computed(() => props.interactive && hasColor.value)
const colorWithAlpha = computed(() => hexToRGBA(props.item.name, 0.35))
const ariaLabel = computed(
  () => `Предмет ${props.item.name}, количество ${props.item.quantity}`,
)

// Клон используется как стилизованный drag-image, чтобы курсор не таскал
// квадратную ячейку целиком.
let dragImage: HTMLElement | null = null

function removeDragImage(): void {
  if (dragImage) {
    dragImage.remove()
    dragImage = null
  }
}

function onDragStart(event: DragEvent): void {
  const target = event.currentTarget as HTMLElement | null
  if (!target || !event.dataTransfer) return

  const clone = target.cloneNode(true) as HTMLElement
  clone.classList.add('card__slot--dragging')
  document.body.appendChild(clone)
  dragImage = clone

  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setDragImage(clone, 50, 50)
  emit('dragstart', props.index)
}

function onDragOver(event: DragEvent): void {
  // preventDefault разрешает «сброс» на эту ячейку (в т.ч. пустую).
  event.preventDefault()
  emit('dragover', props.index)
}

function onDragEnd(): void {
  removeDragImage()
  emit('dragend')
}

function onSelect(): void {
  if (!canInteract.value) return
  emit('click', props.index)
}

// Доступность с клавиатуры: выбор предмета по Enter/Space.
function onKeydown(event: KeyboardEvent): void {
  if (!canInteract.value) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    emit('click', props.index)
  }
}

// Если карточку размонтировали посреди перетаскивания — подчистим клон.
onBeforeUnmount(removeDragImage)
</script>

<style scoped lang="scss">
.card {
  position: relative;
}

.card__slot {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103px;
  height: 98px;
  background: #262626;
  border: 1px solid #4d4d4d;

  &--interactive {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid #6ea8fe;
    outline-offset: -2px;
  }

  &--empty {
    opacity: 0.2;
  }

  &--selected {
    outline: 1.5px solid rgba(255, 255, 255, 0.5);
    outline-offset: -3px;
    background: #2e2e2e;
    z-index: 1;
  }

  // Стилизованный клон, который браузер снимает как drag-image.
  // Уводим его за экран, чтобы не мелькал реальный элемент.
  &--dragging {
    position: absolute;
    top: 0;
    left: -1000px;
    border-radius: 24px;
    z-index: 111;
  }
}

.card__glass,
.card__color {
  position: absolute;
  width: 48px;
  height: 48px;
  transform: translate(55%, 45%);
}

.card__glass {
  left: 6px;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(6px);
}

.card__color {
  left: 0;
  top: 6px;
  z-index: 1;
}

.card__quantity {
  position: absolute;
  left: 4px;
  top: 2px;
  min-width: 14px;
  height: 16px;
  padding: 0 3px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-top-left-radius: 6px;
  opacity: 0.4;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
}
</style>

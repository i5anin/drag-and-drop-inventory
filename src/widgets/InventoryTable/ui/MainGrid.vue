<template>
  <div class="main-grid">
    <div class="grid">
      <ItemCard
        v-for="(item, index) in colorGrid"
        :key="index"
        :item="item"
        :index="index"
        :is-selected="isCardSelected(index)"
        @dragstart="handleDragStart"
        @dragover="handleDragOver"
        @dragend="handleDragEnd"
        @click="toggleCardSelection"
      />
    </div>

    <!-- :duration задаёт явную длительность: элемент гарантированно
         размонтируется по таймеру, даже если transitionend не сработает
         (например, при прерывании enter-анимации быстрым закрытием). -->
    <Transition name="slide-panel" :duration="280">
      <ItemView
        v-if="selectedColor"
        :item="selectedColor"
        @close="closeSelection"
        @delete="removeSelected"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import ItemCard from './ItemCard.vue'
import ItemView from './ItemView.vue'
import { useInventoryGrid } from '../model/useInventoryGrid'

const {
  colorGrid,
  selectedColor,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  toggleCardSelection,
  isCardSelected,
  closeSelection,
  removeSelected,
} = useInventoryGrid()

// Горячие клавиши при открытой плашке: Esc — закрыть, Delete — удалить предмет.
function onKeydown(event: KeyboardEvent): void {
  if (!selectedColor.value) return
  if (event.key === 'Escape') closeSelection()
  else if (event.key === 'Delete') removeSelected()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped lang="scss">
.main-grid {
  position: absolute;
  left: 292px;
  top: 32px;
  display: inline-flex;
  flex-direction: column;
  background: #262626;
  border: 0.5px solid #4d4d4d;
  border-radius: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 12px;
  // overflow:hidden скругляет внешние углы сетки (внутренние ячейки квадратные).
  overflow: hidden;
}

// «Выезжающая» плашка: появляется из-за правого края сетки.
.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: transform 0.28s ease, opacity 0.28s ease;
}

.slide-panel-enter-from,
.slide-panel-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

// Уважаем системную настройку «уменьшить движение».
@media (prefers-reduced-motion: reduce) {
  .slide-panel-enter-active,
  .slide-panel-leave-active {
    transition: none;
  }
}
</style>

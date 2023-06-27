<template>
  <div class="wrapper">
    <div
      class="block"
      :draggable="color.name !== null"
      @dragstart="dragStart"
      @dragover="dragOver"
      @dragend="dragEnd"
      @click="selectCard"
      :class="{ selected: isSelected, empty: color.name === null }"
    >
      <!-- Условный рендеринг эффекта стекла -->
      <div
        v-if="color.name !== null"
        class="glass-effect"
        :style="{ backgroundColor: colorWithAlpha }"
      ></div>

      <!-- Условный рендеринг содержимого карты -->
      <div
        v-if="color.name !== null"
        class="card-content"
        :style="{ backgroundColor: color.name }"
      ></div>

      <div v-if="color.quantity !== null" class="number-frame">
        {{ color.quantity }}
      </div>
    </div>
  </div>
</template>

<script>
import { hexToRGBA } from '@/services/colorUtils.js'

export default {
  props: {
    color: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isDrag: false,
      element: null,
    }
  },
  emits: ['dragstart', 'dragover', 'dragend', 'click'],
  methods: {
    // Обработчик события dragstart
    dragStart(event) {
      // Клонируем элемент и добавляем ему класс "dragging"
      const element = event.srcElement.cloneNode(true)
      element.classList.add('dragging')

      // Добавляем клонированный элемент в body
      document.body.appendChild(element)
      this.element = element
      event.dataTransfer.setDragImage(element, 50, 50)

      this.isDrag = true
      this.$emit('dragstart', this.index)
    },
    // Обработчик события dragover
    dragOver() {
      this.$emit('dragover', this.index)
    },
    // Обработчик события dragend
    dragEnd() {
      this.isDrag = false
      this.$emit('dragend')
    },
    // Обработчик события click для выбора карты
    selectCard() {
      if (this.color.name == null) {
        return
      }
      this.$emit('click', this.index)
    },
  },
  computed: {
    // Вычисление цвета с альфа-каналом для стиля glass-effect
    colorWithAlpha() {
      return hexToRGBA(this.color.name, 0.35) // Здесь 0.35 - значение альфа-канала (от 0 до 1)
    },
  },
}
</script>

<style>
.wrapper {
  position: relative;
}

.block {
  padding: 0px;
  border: 0.5px #4d4d4d solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;
  width: 103px;
  height: 98px;
  position: relative;
}

.dragging {
  border-radius: 24px;
  z-index: 111;
  left: -1000px;
}

.glass-effect {
  width: 48px;
  height: 48px;
  backdrop-filter: blur(6px);
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(55%, 45%);
  left: 6px;
  top: 0px;
  position: absolute;
}

.card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(55%, 45%);
  position: absolute;
  width: 48px;
  height: 48px;
  z-index: 1;
  left: 0px;
  top: 6px;
  position: absolute;
}

.number-frame {
  width: 16px;
  height: 16px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #262626;
  border-top-left-radius: 6px;
  border: 0.5px #4d4d4d solid;
  width: 8px;
  height: 12px;
  left: 4px;
  top: 2px;
  position: absolute;
  opacity: 0.4;
  text-align: center;
  color: white;
  font-size: 10px;
  font-family: Inter;
  font-weight: 500;
  word-wrap: break-word;
}

.color-item-blur {
  width: 48px;
  height: 48px;
  left: 6px;
  top: 0px;
  position: absolute;
  backdrop-filter: blur(6px);
}
</style>

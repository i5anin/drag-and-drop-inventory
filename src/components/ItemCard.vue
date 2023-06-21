<!-- ItemCard.vue -->
<template>
  <div
    class="block"
    draggable="true"
    @dragstart="dragStart"
    @dragover="dragOver"
    @dragend="dragEnd"
    @dragenter="dragEnter"
    @click="selectCard"
    :class="{ selected: isSelected, empty: color.name === null }"
  >
    <div
      class="glass-effect"
      :style="{ backgroundColor: colorWithAlpha }"
    ></div>
    <div class="color-card" :style="{ backgroundColor: color.name }">
      <p v-if="color.quantity !== null" class="color-quantity">
        {{ color.quantity }}
      </p>
    </div>
  </div>
</template>

<script>
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
  emits: ['dragstart', 'dragover', 'dragend', 'click'],
  methods: {
    // Обработчик события dragenter
    dragEnter() {
      this.$emit('dragenter', this.index)
    },
    // Обработчик события dragstart
    dragStart() {
      this.$emit('dragstart', this.index)
    },
    // Обработчик события dragover
    dragOver() {
      this.$emit('dragover', this.index)
    },
    // Обработчик события dragend
    dragEnd() {
      this.$emit('dragend')
    },
    // Обработчик события click для выбора карты
    selectCard() {
      this.$emit('click', this.index)
    },
    // Преобразование цвета в формат RGBA с заданным значением альфа-канала
    hexToRGBA(hex, alpha) {
      if (hex === null) {
        // Обработка случая, когда значение цвета равно null
        return
      }
      const shiftAmount = 150 // Значение сдвига

      // Получить значения R, G и B из HEX
      let r = parseInt(hex.slice(1, 3), 16)
      let g = parseInt(hex.slice(3, 5), 16)
      let b = parseInt(hex.slice(5, 7), 16)

      // Применить сдвиг к каждому компоненту цвета
      r = Math.max(0, Math.min(r + shiftAmount, 255))
      g = Math.max(0, Math.min(g + shiftAmount, 255))
      b = Math.max(0, Math.min(b + shiftAmount, 255))

      // Вернуть цвет в формате RGBA с заданным значением альфа-канала
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    },
  },
  computed: {
    // Вычисление цвета с альфа-каналом для стиля glass-effect
    colorWithAlpha() {
      return this.hexToRGBA(this.color.name, 0.35) // Здесь 0.35 - значение альфа-канала (от 0 до 1)
    },
  },
}
</script>

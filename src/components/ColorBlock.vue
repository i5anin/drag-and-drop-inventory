<!-- ColorBlock.vue -->
<template>
  <div
    v-if="color"
    class="block"
    draggable="true"
    @dragstart="dragStart"
    @dragover="dragOver"
    @dragend="dragEnd"
    @click="selectCard"
    :class="{ selected: isSelected }"
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
  <div v-else class="block empty-block"></div>
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
      let r = parseInt(hex.slice(1, 3), 16) + 150
      let g = parseInt(hex.slice(3, 5), 16) + 150
      let b = parseInt(hex.slice(5, 7), 16) + 150

      // Убедиться, что значения находятся в диапазоне от 0 до 255
      r = Math.max(0, Math.min(r, 255))
      g = Math.max(0, Math.min(g, 255))
      b = Math.max(0, Math.min(b, 255))

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

<style>
.block {
  padding: 25px;
  outline: 1px solid rgb(126, 126, 126);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: end;
}

.glass-effect {
  width: 100px;
  height: 100px;
  backdrop-filter: blur(6px);
  z-index: 2;
  margin-top: -25px;
  margin-left: 25px;
}

.color-card {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 1;
}

.color-quantity {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff;
  font-size: 12px;
}
</style>

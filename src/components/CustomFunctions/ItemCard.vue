<!-- ItemCard.vue -->
<template>
  <div class="wrapper">
    <div
      class="block"
      :draggable="color.name != null"
      @dragstart="dragStart"
      @dragover="dragOver"
      @dragend="dragEnd"
      @click="selectCard"
      :class="{
        selected: isSelected,
        empty: color.name === null,
        dragging: isDrag,
      }"
    >
      <div
        class="glass-effect"
        :style="{ backgroundColor: colorWithAlpha }"
      ></div>
      <div class="color-card" :style="{ backgroundColor: color.name }"></div>
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
  data() {
    return {
      isDrag: false,
    }
  },
  emits: ['dragstart', 'dragover', 'dragend', 'click'],
  methods: {
    // Обработчик события dragstart
    dragStart() {
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
    // Преобразование цвета в формат RGBA с заданным значением альфа-канала
    hexToRGBA(hex, alpha) {
      if (hex === null) {
        return // Обработка случая, когда значение цвета равно null
      }
      const shiftAmount = 50 // Значение сдвига

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

<style>
.wrapper {
  position: relative;
}

.parent {
  position: absolute !important;
  padding: 25px;
  border: 0.5px solid rgb(126, 126, 126);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: end;
  z-index: 10;
}

.block {
  position: relative;
  padding: 0px;
  border: 0.5px #4d4d4d solid;
  /* display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: end; */
  z-index: 9;
  background: #262626;

  width: 105px;
  height: 100px;
  position: relative;
}

.dragging {
  cursor: move;
  border-radius: 12px;
}

.glass-effect {
  width: 48px;
  height: 48px;
  backdrop-filter: blur(6px);
  z-index: 2;
  margin-top: -10px;
  margin-left: 10px;
}

.color-card {
  position: absolute;
  width: 48px;
  height: 48px;
  z-index: 1;
}

.color-quantity {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff;
  font-size: 12px;
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

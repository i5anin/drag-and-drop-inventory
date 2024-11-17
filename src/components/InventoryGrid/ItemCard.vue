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
    color: { type: Object, required: true },
    index: { type: Number, required: true },
    isSelected: { type: Boolean, required: true },
  },
  data() {
    return {
      isDrag: false,
    }
  },
  emits: ['start', 'over', 'end', 'select'],
  methods: {
    dragStart(event) {
      event.dataTransfer.setData('text/plain', this.index)
      this.isDrag = true
      this.$emit('start', this.index)
    },
    dragOver() {
      this.$emit('over', this.index)
    },
    dragEnd() {
      this.isDrag = false
      this.$emit('end')
    },
    selectCard() {
      if (!this.color.name) return
      this.$emit('select', this.index)
    },
  },
  computed: {
    colorWithAlpha() {
      return this.color.name ? hexToRGBA(this.color.name, 0.35) : null
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
  transform: translate(55%, 45%);
  left: 6px;
  top: 0;
  position: absolute;
}

.card-content {
  transform: translate(55%, 45%);
  width: 48px;
  height: 48px;
  z-index: 1;
  left: 0px;
  top: 6px;
  position: absolute;
}

.number-frame {
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
  font-family: Inter,serif;
  font-weight: 500;
  word-wrap: break-word;
}
</style>

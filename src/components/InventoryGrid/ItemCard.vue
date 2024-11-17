<template>
  <div class="wrapper">
    <div
      class="block"
      :draggable="isDraggable"
      @dragstart="onDragStart"
      @dragover="onDragOver"
      @dragend="onDragEnd"
      @click="onSelectCard"
      :class="{
        selected: isSelected,
        empty: !isDraggable,
      }"
    >
      <div v-if="isDraggable" class="glass-effect" :style="{ backgroundColor: colorWithAlpha }"></div>
      <div v-if="isDraggable" class="card-content" :style="{ backgroundColor: color.name }"></div>
      <div v-if="color.quantity !== null" class="number-frame">{{ color.quantity }}</div>
    </div>
  </div>
</template>

<script>
import { hexToRGBA } from '@/services/colorUtils.js';

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
      isDragging: false,
      clonedElement: null,
    };
  },
  emits: ['dragstart', 'dragover', 'dragend', 'click'],
  computed: {
    isDraggable() {
      return Boolean(this.color.name);
    },
    colorWithAlpha() {
      return hexToRGBA(this.color.name, 0.35);
    },
  },
  methods: {
    onDragStart(event) {
      const clonedElement = event.target.cloneNode(true);
      clonedElement.classList.add('dragging');
      document.body.appendChild(clonedElement);

      this.clonedElement = clonedElement;
      this.isDragging = true;

      event.dataTransfer.setDragImage(clonedElement, 50, 50);
      this.$emit('dragstart', this.index);
    },
    onDragOver() {
      this.$emit('dragover', this.index);
    },
    onDragEnd() {
      if (this.clonedElement) {
        document.body.removeChild(this.clonedElement);
        this.clonedElement = null;
      }
      this.isDragging = false;
      this.$emit('dragend');
    },
    onSelectCard() {
      if (!this.isDraggable) return;
      this.$emit('click', this.index);
    },
  },
};
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
  left: 0;
  top: 6px;
  position: absolute;
}

.number-frame {
  background: #262626;
  border-top-left-radius: 6px;
  border: 1px #4d4d4d solid;
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

.color-item-blur {
  width: 48px;
  height: 48px;
  left: 6px;
  top: 0;
  position: absolute;
  backdrop-filter: blur(6px);
}
</style>

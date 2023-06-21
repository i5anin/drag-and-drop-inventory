<template>
  <div class="container">
    <div class="grid">
      <ColorBlock
        v-for="(color, index) in grid"
        :key="index"
        :color="color"
        :index="index"
        :isSelected="isSelected(index)"
        @dragstart="dragStart(index)"
        @dragover="dragOver(index)"
        @dragend="dragEnd"
        @click="selectCard(index)"
      ></ColorBlock>
    </div>
    <div>
      <div class="sidebar" v-if="selectedColor !== null">
        <p>
          Цвет:
          <span :style="{ color: selectedColor.name }">{{
            selectedColor.name
          }}</span>
        </p>
        <p>Количество: {{ selectedColor.quantity }}</p>
        <p>Дополнительная информация или действия для выбранной карты</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed, watch } from 'vue'
import ColorBlock from './ColorBlock.vue'
import { savePositions, loadPositions } from './localStorage.js'

export default {
  components: {
    ColorBlock,
  },
  setup() {
    const grid = reactive(loadPositions())
    const selectedCard = ref(null)
    const draggingIndex = ref(null)

    const dragStart = (index) => {
      draggingIndex.value = index
    }

    const dragOver = (index) => {
      if (draggingIndex.value !== null) {
        const draggedColor = grid[draggingIndex.value]
        grid.splice(draggingIndex.value, 1)
        grid.splice(index, 0, draggedColor)
        draggingIndex.value = index
      }
    }

    const dragEnd = () => {
      draggingIndex.value = null
      savePositions(grid)
    }

    const selectCard = (index) => {
      selectedCard.value = index === selectedCard.value ? null : index
    }

    const isSelected = (index) => {
      return index === selectedCard.value
    }

    const selectedColor = computed(() => {
      if (selectedCard.value !== null) {
        return grid[selectedCard.value]
      }
      return null
    })

    // Сохранение позиций цветов в localStorage
    watch(grid, () => {
      savePositions(grid)
    })

    return {
      grid,
      selectedCard,
      draggingIndex,
      dragStart,
      dragOver,
      dragEnd,
      selectCard,
      isSelected,
      selectedColor,
    }
  },
}
</script>

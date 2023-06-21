<template>
  <div class="container">
    <div class="grid">
      <ColorBlock
        v-for="(color, index) in grid"
        :key="index"
        :color="color"
        :index="index"
        :selectedCard="selectedCard"
        @dragstart="dragStart"
        @dragover="dragOver"
        @dragend="dragEnd"
        @click="selectCard"
      ></ColorBlock>
    </div>
    <div>
      <div class="sidebar" v-if="selectedCard !== null">
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
    let draggingIndex = null

    const dragStart = (index) => {
      draggingIndex = index
    }

    const dragOver = (index) => {
      if (draggingIndex !== null) {
        const draggedColor = grid[draggingIndex]
        grid.splice(draggingIndex, 1)
        grid.splice(index, 0, draggedColor)
        draggingIndex = index
      }
    }

    const dragEnd = () => {
      draggingIndex = null
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
    watch(
      () => grid,
      () => {
        savePositions(grid)
      }
    )

    return {
      grid,
      selectedCard,
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

<template>
  <div class="container">
    <div v-if="isLoading" class="skeleton-sidebar"></div>
    <div v-else>
      <div class="sidebar" v-if="selectedCard !== null">
        <p>Selected Color: {{ selectedColor.name }}</p>
        <p>Quantity: {{ selectedColor.quantity }}</p>
        <p>Additional information or actions for the selected card</p>
      </div>
    </div>
    <div class="grid">
      <div
        v-for="(color, index) in grid"
        :key="index"
        :style="{ backgroundColor: color.name }"
        :class="{ selected: isSelected(index) }"
        draggable="true"
        @dragstart="dragStart(index)"
        @dragover="dragOver(index)"
        @dragend="dragEnd"
        @click="selectCard(index)"
      >
        <p v-if="color.quantity !== null" class="color-quantity">
          {{ color.quantity }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'

export default {
  setup() {
    const grid = reactive([
      { name: 'red', quantity: 5 },
      { name: 'blue', quantity: 3 },
      { name: 'green', quantity: 7 },
      { name: 'yellow', quantity: 2 },
      { name: 'orange', quantity: 1 },
      { name: 'purple', quantity: 4 },
      { name: 'pink', quantity: 6 },
      { name: 'teal', quantity: 0 },
      { name: 'brown', quantity: 8 },
      { name: 'gray', quantity: 9 },
    ])

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
    }

    const selectCard = (index) => {
      selectedCard.value = index === selectedCard.value ? null : index
    }

    const isSelected = (index) => {
      return index === selectedCard.value
    }

    // Загрузка данных (имитация)
    const isLoading = ref(true)
    setTimeout(() => {
      isLoading.value = false
    }, 2000)

    const selectedColor = computed(() => {
      if (selectedCard.value !== null) {
        return grid[selectedCard.value]
      }
      return null
    })

    return {
      grid,
      selectedCard,
      dragStart,
      dragOver,
      dragEnd,
      selectCard,
      isSelected,
      isLoading,
      selectedColor,
    }
  },
}
</script>

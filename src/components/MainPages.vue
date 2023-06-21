<!-- MainPages.vue -->
<template>
  <div class="container">
    <div class="grid">
      <ItemCard
        v-for="(color, index) in grid"
        :key="index"
        :color="color"
        :index="index"
        :isSelected="isSelected(index)"
        @dragstart="dragStart(index)"
        @dragover="dragOver(index)"
        @dragend="dragEnd"
        @click="selectCard(index)"
      ></ItemCard>
    </div>
    <ItemView />
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import ItemView from '@/components/ItemView.vue'
import { reactive, ref, computed, watch } from 'vue'
import { savePositions, loadPositions } from '@/services/localStorage.js'

export default {
  components: {
    ItemCard,
    ItemView,
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

<!-- MainPages.vue -->
<template>
  <div class="container">
    <div class="grid">
      <template v-for="(color, index) in grid" :key="index">
        <ItemCard
          v-if="color !== null"
          :key="index"
          :color="color"
          :index="index"
          :isSelected="isSelected(index)"
          @dragstart="dragStart(index)"
          @dragover="dragOver(index)"
          @dragend="dragEnd"
          @click="selectCard(index)"
        ></ItemCard>
        <div v-else class="block empty"></div>
      </template>
    </div>
    <ItemView :selected-color="selectedColor" />
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
    const draggingEnterIndex = ref(null)

    const draggable = reactive({ from: null, to: null })

    const grid = reactive([...loadPositions()])
    const selectedCard = ref(null)
    const draggingIndex = ref(null)

    const dragStart = (index) => {
      draggable.from = index
    }

    const dragOver = (index) => {
      draggable.to = index
    }

    const dragEnd = () => {
      const toElem = grid[draggable.to]
      const fromElem = grid[draggable.from]
      grid.splice(draggable.to, 1, fromElem)
      grid.splice(draggable.from, 1, toElem)

      draggable.from = null
      draggable.to = null

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
      draggingEnterIndex,
    }
  },
}
</script>

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
    <ItemView v-if="selectedCard !== null" :selected-color="selectedColor" />
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import ItemView from '@/components/ItemView.vue'
import { ref, computed, watch } from 'vue'
import { savePositions, loadPositions } from '@/services/localStorage.js'

export default {
  components: {
    ItemCard,
    ItemView,
  },
  setup() {
    const draggingEnterIndex = ref(null)
    const grid = ref(loadPositions())
    const selectedCard = ref(null)

    const draggable = ref({ from: null, to: null })

    const dragStart = (index) => {
      draggable.value.from = index
    }

    const dragOver = (index) => {
      draggable.value.to = index
    }

    const dragEnd = () => {
      const toElem = grid.value[draggable.value.to]
      const fromElem = grid.value[draggable.value.from]
      grid.value.splice(draggable.value.to, 1, fromElem)
      grid.value.splice(draggable.value.from, 1, toElem)

      draggable.value.from = null
      draggable.value.to = null

      savePositions(grid.value)
    }

    const selectCard = (index) => {
      selectedCard.value = index === selectedCard.value ? null : index
    }

    const isSelected = (index) => {
      return index === selectedCard.value
    }

    const selectedColor = computed(() => {
      return selectedCard.value !== null ? grid.value[selectedCard.value] : null
    })

    // Сохранение позиций цветов в localStorage
    watch(grid, () => {
      savePositions(grid.value)
    })

    return {
      grid,
      selectedCard,
      draggingEnterIndex,
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

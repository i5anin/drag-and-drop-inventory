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
        <div v-else class="cell empty"></div>
      </template>
    </div>
    <ItemView v-if="selectedCard !== null" :selected-color="selectedColor" />
  </div>
</template>

<script>
import ItemCard from '@/components/CustomFunctions/ItemCard.vue'
import ItemView from '@/components/CustomFunctions/ItemView.vue'
import { savePositions, loadPositions } from '@/services/localStorage.js'
import { ref, computed, watch } from 'vue'

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

<style>
.container {
  display: flex;
  background: #1e1e1e;
  color: #fff;
}

.sidebar {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  background: #333;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
  height: 100vh;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* gap: 10px; */
}

.grid div {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid div.selected {
  outline: 2px solid #fff;
}

.color-quantity {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff;
  font-size: 12px;
}
.cell:nth-child(0) {
  /* Левый верхний угол */
  border-top-left-radius: 12px;
}

.cell:nth-child(5) {
  /* Правый верхний угол */
  border-top-right-radius: 12px;
}

.cell:nth-child(21) {
  /* Левый нижний угол */
  border-bottom-left-radius: 12px;
}

.cell:nth-child(25) {
  /* Правый нижний угол */
  border-bottom-right-radius: 12px;
}
</style>

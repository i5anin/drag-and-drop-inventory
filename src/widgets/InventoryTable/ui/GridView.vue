<template>
  <div class="main-grid">
    <div class="grid">
      <template v-for="(color, index) in colorGrid" :key="index">
        <ItemCard
          v-if="color"
          :color="color"
          :index="index"
          :isSelected="isCardSelected(index)"
          @dragstart="handleDragStart(index)"
          @dragover="handleDragOver(index)"
          @dragend="handleDragEnd"
          @click="toggleCardSelection(index)"
        />
        <div v-else class="cell empty"></div>
      </template>
    </div>
    <ItemView v-if="selectedColor" :selected-color="selectedColor" />
  </div>
</template>


<script>
import { ref, computed, watch } from 'vue'
import ItemCard from './ItemCard.vue'
import ItemView from './ItemView.vue'
import { savePositions, loadPositions } from '@/shared/utils/localStorage.js'

export default {
  name: 'MainGrid',
  components: {
    ItemCard,
    ItemView,
  },
  setup() {
    const colorGrid = ref(loadPositions())
    const selectedIndex = ref(null)
    const dragState = ref({ fromIndex: null, toIndex: null })

    const handleDragStart = (index) => {
      dragState.value.fromIndex = index
    }

    const handleDragOver = (index) => {
      dragState.value.toIndex = index
    }

    const handleDragEnd = () => {
      const { fromIndex, toIndex } = dragState.value
      if (fromIndex !== null && toIndex !== null && fromIndex !== toIndex) {
        [colorGrid.value[fromIndex], colorGrid.value[toIndex]] = [
          colorGrid.value[toIndex],
          colorGrid.value[fromIndex],
        ]
        savePositions(colorGrid.value)
      }
      dragState.value = { fromIndex: null, toIndex: null }
    }

    const toggleCardSelection = (index) => {
      selectedIndex.value = selectedIndex.value === index ? null : index
    }

    const isCardSelected = (index) => selectedIndex.value === index

    const selectedColor = computed(() => {
      return selectedIndex.value !== null ? colorGrid.value[selectedIndex.value] : null
    })

    watch(colorGrid, () => {
      savePositions(colorGrid.value)
    })

    return {
      colorGrid,
      selectedColor,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      toggleCardSelection,
      isCardSelected,
    }
  },
}
</script>


<style lang="scss">
.main-grid {
  position: absolute;
  left: 292px;
  top: 32px;
  display: inline-flex;
  flex-direction: column;
  background: #262626;
  border: 0.5px solid #4d4d4d;
  border-radius: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 12px;
  overflow: hidden;
}

.cell.empty {
  /* Styles for empty cells if needed */
}


.main_grid {
  left: 292px;
  top: 32px;
  position: absolute;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
  background: #262626;
  border: 0.5px #4d4d4d solid;
}

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
  border-radius: 12px;
  overflow: hidden;
  /* gap: 10px; */
}

.wrapper {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper.selected {
  outline: 2px solid #fff;
}

.color-quantity {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff;
  font-size: 12px;
}

.grid {
  :nth-child(1) {
    .block {
      /* Левый верхний угол */
      border-top-left-radius: 12px;
    }
  }

  :nth-child(5) {
    .block {
      /* Правый верхний угол */
      border-top-right-radius: 12px;
    }
  }

  :nth-child(21) {
    .block {
      /* Левый нижний угол */
      border-bottom-left-radius: 12px;
    }
  }

  :nth-child(25) {
    .block {
      /* Правый нижний угол */
      border-bottom-right-radius: 12px;
    }
  }
}
</style>

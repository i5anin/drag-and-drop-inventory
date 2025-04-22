// src/widgets/InventoryTable/model/useInventoryGrid.js
import { ref, computed, watch } from 'vue'
import { savePositions, loadPositions } from '@/shared/utils/localStorage.js'

export function useInventoryGrid() {
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

  const selectedColor = computed(() =>
    selectedIndex.value !== null ? colorGrid.value[selectedIndex.value] : null
  )

  watch(colorGrid, () => savePositions(colorGrid.value))

  return {
    colorGrid,
    selectedColor,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    toggleCardSelection,
    isCardSelected,
  }
}

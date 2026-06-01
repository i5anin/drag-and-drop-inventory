import { computed, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { InventoryItem } from '@/shared/types/inventory'
import {
  createDefaultGrid,
  loadPositions,
  savePositions,
} from '@/shared/utils/localStorage'
import { createRandomItem } from '@/shared/utils/randomItem'

interface DragState {
  fromIndex: number | null
  toIndex: number | null
}

export interface UseInventoryGrid {
  /** Реактивная сетка инвентаря (позиции сохраняются в localStorage). */
  colorGrid: Ref<InventoryItem[]>
  /** Выбранный (непустой) предмет либо `null`, если ничего не выбрано. */
  selectedColor: ComputedRef<InventoryItem | null>
  /** Все слоты заняты — добавлять больше некуда. */
  isFull: ComputedRef<boolean>
  handleDragStart: (index: number) => void
  handleDragOver: (index: number) => void
  handleDragEnd: () => void
  toggleCardSelection: (index: number) => void
  isCardSelected: (index: number) => boolean
  closeSelection: () => void
  removeSelected: () => void
  addItem: () => void
  resetGrid: () => void
}

// --- Единое состояние инвентаря (одно на приложение) ---
// Объявлено на уровне модуля, поэтому сетка и тулбар работают с одними
// и теми же данными без отдельного state-менеджера.
const colorGrid = ref<InventoryItem[]>(loadPositions())
const selectedIndex = ref<number | null>(null)
const dragState = ref<DragState>({ fromIndex: null, toIndex: null })

const selectedColor = computed<InventoryItem | null>(() => {
  if (selectedIndex.value === null) return null
  const item = colorGrid.value[selectedIndex.value]
  // Плашку показываем только для непустого слота.
  return item && item.name !== null ? item : null
})

const isFull = computed(() =>
  colorGrid.value.every((item) => item.name !== null),
)

function handleDragStart(index: number): void {
  dragState.value.fromIndex = index
}

function handleDragOver(index: number): void {
  dragState.value.toIndex = index
}

function handleDragEnd(): void {
  const { fromIndex, toIndex } = dragState.value
  if (fromIndex !== null && toIndex !== null && fromIndex !== toIndex) {
    const grid = colorGrid.value
    const moved = grid[fromIndex]
    grid[fromIndex] = grid[toIndex]
    grid[toIndex] = moved
  }
  dragState.value = { fromIndex: null, toIndex: null }
}

function toggleCardSelection(index: number): void {
  selectedIndex.value = selectedIndex.value === index ? null : index
}

function isCardSelected(index: number): boolean {
  return selectedIndex.value === index
}

function closeSelection(): void {
  selectedIndex.value = null
}

/** Удаляет выбранный предмет (слот становится пустым) и закрывает плашку. */
function removeSelected(): void {
  if (selectedIndex.value === null) return
  colorGrid.value[selectedIndex.value] = { name: null, quantity: null }
  selectedIndex.value = null
}

/** Добавляет случайный предмет в первый свободный слот. */
function addItem(): void {
  const emptyIndex = colorGrid.value.findIndex((item) => item.name === null)
  if (emptyIndex === -1) return
  colorGrid.value[emptyIndex] = createRandomItem()
}

/** Сбрасывает инвентарь к стартовому состоянию. */
function resetGrid(): void {
  selectedIndex.value = null
  colorGrid.value = createDefaultGrid()
}

// deep — реагируем и на перестановку/удаление/добавление внутри массива,
// а не только на замену самого ref.
watch(colorGrid, (grid) => savePositions(grid), { deep: true })

export function useInventoryGrid(): UseInventoryGrid {
  return {
    colorGrid,
    selectedColor,
    isFull,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    toggleCardSelection,
    isCardSelected,
    closeSelection,
    removeSelected,
    addItem,
    resetGrid,
  }
}

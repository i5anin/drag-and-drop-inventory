import type { InventoryItem } from '@/shared/types/inventory'

/** Ключ, под которым сетка инвентаря хранится в localStorage. */
const STORAGE_KEY = 'colorGridPositions'

/** Размер сетки инвентаря: 5 × 5 = 25 ячеек. */
export const GRID_SIZE = 25

/** Создаёт стартовую сетку: три заполненных слота и остальные пустые. */
export function createDefaultGrid(): InventoryItem[] {
  const grid: InventoryItem[] = Array.from({ length: GRID_SIZE }, () => ({
    name: null,
    quantity: null,
  }))

  grid[0] = { name: '#aa9765', quantity: 5 }
  grid[1] = { name: '#656caa', quantity: 3 }
  grid[2] = { name: '#7faa65', quantity: 7 }

  return grid
}

/** Проверяет, что значение — это валидный слот инвентаря. */
function isInventoryItem(value: unknown): value is InventoryItem {
  if (typeof value !== 'object' || value === null) return false
  const item = value as Record<string, unknown>
  const nameOk = item.name === null || typeof item.name === 'string'
  const quantityOk = item.quantity === null || typeof item.quantity === 'number'
  return nameOk && quantityOk
}

/** Сохраняет позиции предметов в localStorage. */
export function savePositions(grid: InventoryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(grid))
  } catch (error) {
    // Приватный режим / переполнение хранилища — не роняем приложение.
    console.warn('Не удалось сохранить инвентарь в localStorage:', error)
  }
}

/**
 * Загружает позиции предметов из localStorage.
 * При отсутствии или повреждении данных возвращает стартовую сетку.
 */
export function loadPositions(): InventoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createDefaultGrid()

    const parsed: unknown = JSON.parse(raw)
    if (
      Array.isArray(parsed) &&
      parsed.length === GRID_SIZE &&
      parsed.every(isInventoryItem)
    ) {
      return parsed
    }
  } catch (error) {
    console.warn('Повреждённые данные инвентаря, сбрасываю на дефолт:', error)
  }

  return createDefaultGrid()
}

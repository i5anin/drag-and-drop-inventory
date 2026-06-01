import type { InventoryItem } from '@/shared/types/inventory'

// Палитра в тон тёмной теме — приглушённые, но различимые цвета.
const PALETTE = [
  '#aa9765',
  '#656caa',
  '#7faa65',
  '#aa6565',
  '#65a0aa',
  '#9d76b5',
  '#b58a5e',
  '#5eb58f',
  '#b55e8a',
] as const

/** Случайный предмет: цвет из палитры и количество 1–9. */
export function createRandomItem(): InventoryItem {
  const name = PALETTE[Math.floor(Math.random() * PALETTE.length)]
  const quantity = Math.floor(Math.random() * 9) + 1
  return { name, quantity }
}

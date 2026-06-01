/** Один слот инвентаря. Пустой слот — это `{ name: null, quantity: null }`. */
export interface InventoryItem {
  /** HEX-цвет предмета (`#rrggbb`) или `null`, если слот пустой. */
  name: string | null
  /** Количество предметов в слоте или `null`, если слот пустой. */
  quantity: number | null
}

// Сохранение позиций цветов в localStorage
export const savePositions = (grid) => {
  localStorage.setItem('colorGridPositions', JSON.stringify(grid))
}

// Загрузка позиций цветов из localStorage
export const loadPositions = () => {
  const positions = localStorage.getItem('colorGridPositions')
  if (positions) {
    return JSON.parse(positions)
  }
  return [
    { name: 'red', quantity: 5 },
    { name: 'blue', quantity: 3 },
    { name: 'green', quantity: 7 },
    { name: 'yellow', quantity: 2 },
    { name: 'orange', quantity: 1 },
    { name: 'purple', quantity: 4 },
    { name: 'pink', quantity: 6 },
    { name: 'teal', quantity: 0 },
    { name: 'brown', quantity: 8 },
    { name: 'gray', quantity: 9 },
  ]
}

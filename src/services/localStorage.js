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
    { name: '#FF0000', quantity: 5 },
    { name: '#FF3300', quantity: 3 },
    { name: '#FF6600', quantity: 7 },
    { name: '#FF9900', quantity: 2 },
    { name: '#FFCC00', quantity: 1 },
    { name: '#FFFF00', quantity: 4 },
    { name: '#CCFF00', quantity: 6 },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
  ]
}

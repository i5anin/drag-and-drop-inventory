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
    { name: '#99FF00', quantity: 0 },
    { name: '#66FF00', quantity: 8 },
    { name: '#33FF00', quantity: 9 },
    { name: '#00FF00', quantity: 9 },
    { name: '#00FF33', quantity: 9 },
    { name: '#00FF66', quantity: 9 },
    { name: '#00FF99', quantity: 9 },
    { name: '#00FFCC', quantity: 9 },
  ]
}

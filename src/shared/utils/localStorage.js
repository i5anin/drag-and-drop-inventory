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
    { name: '#aa9765', quantity: 5 },
    { name: '#656caa', quantity: 3 },
    { name: '#7faa65', quantity: 7 },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
    { name: null, quantity: null },
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

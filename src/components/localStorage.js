// Сохранение позиций цветов в localStorage
export const savePositions = (grid) => {
  localStorage.setItem('colorGridPositions', JSON.stringify(grid))
}

// Загрузка позиций цветов из localStorage
export const loadPositions = () => {
  const positions = localStorage.getItem('colorGridPositions')
  if (positions) {
    const loadedGrid = JSON.parse(positions)
    // Ограничение количества объектов цветов до 3
    const grid = loadedGrid.slice(0, 3)
    // Добавление пустых ячеек для заполнения сетки 5x5
    while (grid.length < 5 * 5) {
      grid.push(null)
    }
    return grid
  }
  // Возвращение массива пустых ячеек для заполнения сетки 5x5
  return Array(5 * 5).fill(null)
}

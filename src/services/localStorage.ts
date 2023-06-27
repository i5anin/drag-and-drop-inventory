interface ColorPosition {
  name: string | null;
  quantity: number | null;
}

// Сохранение позиций цветов в localStorage
export const savePositions = (grid: ColorPosition[]): void => {
  localStorage.setItem('colorGridPositions', JSON.stringify(grid))
}

// Загрузка позиций цветов из localStorage
export const loadPositions = (): ColorPosition[] => {
  const positions = localStorage.getItem('colorGridPositions')
  if (positions) {
    return JSON.parse(positions)
  }

  const defaultPositions: ColorPosition[] = Array.from({ length: 24 }, () => ({
    name: null,
    quantity: null,
  }))

  defaultPositions[0] = { name: '#aa9765', quantity: 5 }
  defaultPositions[1] = { name: '#656caa', quantity: 3 }
  defaultPositions[2] = { name: '#7faa65', quantity: 7 }

  return defaultPositions
}

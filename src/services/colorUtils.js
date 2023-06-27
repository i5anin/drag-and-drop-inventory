// colorUtils.js
export function hexToRGBA(hex, alpha) {
  if (hex === null) {
    return // Обработка случая, когда значение цвета равно null
  }
  const shiftAmount = 50 // Значение сдвига

  // Получить значения R, G и B из HEX
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  // Применить сдвиг к каждому компоненту цвета
  r = Math.max(0, Math.min(r + shiftAmount, 255))
  g = Math.max(0, Math.min(g + shiftAmount, 255))
  b = Math.max(0, Math.min(b + shiftAmount, 255))

  // Вернуть цвет в формате RGBA с заданным значением альфа-канала
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

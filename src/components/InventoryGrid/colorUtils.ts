export function hexToRGBA(
  hex: string | null,
  alpha: number
): string | undefined {
  if (hex === null) {
    return undefined // Handle the case when the color value is null
  }
  const shiftAmount = 50 // Shift value

  // Get the R, G, and B values from HEX
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  // Apply the shift to each color component
  r = Math.max(0, Math.min(r + shiftAmount, 255))
  g = Math.max(0, Math.min(g + shiftAmount, 255))
  b = Math.max(0, Math.min(b + shiftAmount, 255))

  // Return the color in RGBA format with the specified alpha channel value
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

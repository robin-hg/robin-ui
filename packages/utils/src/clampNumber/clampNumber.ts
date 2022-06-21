export const clampNumber = (value: number, min?: number, max?: number) => {
  let number = value
  if (min !== undefined && min > number) {
    number = min
  }
  if (max !== undefined && max < number) {
    number = max
  }
  return number
}

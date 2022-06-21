export const parseSize = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value

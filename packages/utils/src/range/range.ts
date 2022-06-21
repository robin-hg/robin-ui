export const range = (start: number, end: number) => {
  const i = start > end ? -1 : 1
  return Array.from({ length: Math.abs(end - start + i) }, (_, n) => n * i + start)
}

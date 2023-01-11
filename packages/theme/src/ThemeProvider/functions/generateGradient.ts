export const generateGradient = (colors: string[], deg = 35) => {
  if (colors.length <= 1) {
    return colors[0]
  }

  const interval = 100 / colors.length - 1
  const colorStr = colors.map((color, i) => `${color} ${interval * i}%`).join(', ')

  return `linear-gradient(${deg}deg, ${colorStr})`
}

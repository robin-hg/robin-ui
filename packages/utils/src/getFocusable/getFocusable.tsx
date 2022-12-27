export const getFocusable = (node?: HTMLElement | null) => {
  if (!node) {
    return []
  }
  const ignored = [
    'a[href]',
    'button',
    'input',
    'textarea',
    'select',
    'details',
    '[tabindex]:not([tabindex="-1"]'
  ]
  const elements = [...node.querySelectorAll<HTMLElement>(ignored.join(', '))]
  return elements.filter(
    element =>
      element instanceof HTMLElement &&
      !element.hasAttribute('disabled') &&
      element.getAttribute('aria-hidden') !== 'true' &&
      element.style.display !== 'none'
  )
}

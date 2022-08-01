import matchers from '@testing-library/jest-dom/matchers'

// Add jest-dom matchers
expect.extend(matchers)

// Ignore css parse errors
const ignoredMessages = ['Could not parse CSS stylesheet']
vi.spyOn(console, 'error').mockImplementation((message: string) => {
  if (ignoredMessages.some(v => message.includes(v))) {
    return
  }
  console.info(message)
})

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
})

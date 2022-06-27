import {
  type RenderHookOptions,
  type RenderOptions,
  render,
  renderHook
} from '@testing-library/react'
import { RobinProvider } from '@robin-ui/core'

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RobinProvider>{children}</RobinProvider>
)

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Wrapper, ...options })

const customRenderHook = <Result, Props>(
  hook: (initialProps: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) => renderHook<Result, Props>(hook, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'
export { customRender as render, customRenderHook as renderHook }

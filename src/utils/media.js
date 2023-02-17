import { createBreakpoint, createMap } from 'styled-components-breakpoint'

export const breakpoints = {
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1200,
}

export const breakpoint = createBreakpoint(breakpoints)
export const map = createMap(breakpoints)

export const media = {}
Object.keys(breakpoints).forEach(key => {
  media[key] = (...styles) => breakpoint(key)(...styles)
})

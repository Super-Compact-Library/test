import { it, expect, beforeEach, afterEach } from '@konpakuto/test'

import { calc } from './calc.js'

beforeEach(() => {
  console.log('second file')
  console.log('current NODE_ENV is ', process.env.NODE_ENV)
})

afterEach(() => {
  console.log('cleanup in second file')
})

it('secode file right answer', () => {
  expect(calc(1, 1)).toBe(2)
})

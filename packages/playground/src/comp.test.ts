import { it, expect, beforeEach, afterEach } from '@scl/testing'

import { calc } from './calc.js'

beforeEach(() => {
  console.log('second file')
})

afterEach(() => {
  console.log('cleanup in second file')
})

it('secode file right answer', () => {
  expect(calc(1, 1)).toBe(2)
})

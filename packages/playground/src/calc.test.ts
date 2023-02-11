import { it, expect, beforeEach } from '@scl/testing'

import { calc } from './calc.js'

beforeEach(() => {
  console.log('this is the calc.test.ts file')
})


it('get right answer', () => {
  expect(calc(1, 1)).toBe(2)
})

it('wrong answer' , () => {
  expect(calc(1,1)).toBe(3)
})

it('object', () => {
  expect({
    name: 'john',
    age: 20
  }).toBe({
    name: 'john',
    age: 20
  })
})

it('wrong object', () => {
  expect({name: 'a'}).not.toBe({name: 'b'})
})
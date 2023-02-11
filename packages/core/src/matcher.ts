import { dequal } from 'dequal';
import { Reportee } from './shared';
import type { IMatcher } from './types'

const withNot = (hasNot: boolean, value: boolean) => {
  return hasNot ? !value : value
}

class Matcher<Value = unknown> implements IMatcher<Value> {
  received: Value;
  hasNot: boolean

  constructor(received: Value) {
    this.received = received
    this.hasNot = false
  }

  get not() {
    this.hasNot = true
    return this
  }

  toBe(expected: Value) {
    
      if(['string', 'number', 'boolean', 'bigint', 'undefined'].includes(typeof expected)) {

        const passed = withNot(this.hasNot, Object.is(this.received, expected))
        
        throw new Reportee(passed, this.received, expected)
      }else {
        // we need a function to compare object
        const isEqual = dequal(this.received, expected)

        const passed = withNot(this.hasNot, isEqual)

        throw new Reportee(passed, this.received, expected)
      }
    
  }
}


export {
  Matcher
}
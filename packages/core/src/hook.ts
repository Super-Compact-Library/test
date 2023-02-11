import { EventEmitter } from 'events'

const hookCenter = new EventEmitter()

const beforeEach = (callback: () => void) => {
  hookCenter.on('before-each', callback)
}

const afterEach = (callback: () => void) => {
  hookCenter.on('after-each', callback)
}

export {
  hookCenter,
  beforeEach,
  afterEach
}
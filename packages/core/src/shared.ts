import { join } from 'path'
import type { IReportee } from './types'

const outputFolderPath = join(process.cwd(), './node_modules/.tinytestlib')

class Reportee<V = unknown> implements IReportee<V> {
  passed: boolean
  received: V
  expected: V

  constructor(passed: boolean, received: V, expected: V) {
    this.passed = passed
    this.received = received
    this.expected = expected
  }
}

export { outputFolderPath, Reportee }

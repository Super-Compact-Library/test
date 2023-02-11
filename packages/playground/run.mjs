import { runner } from 'core'
import { join } from 'path'

const getTestFiles = () => {
  const file = join(process.cwd(), './src/calc.test.ts')
  const file2 = join(process.cwd(), './src/comp.test.ts')

  return Promise.resolve([file, file2])
}

runner(getTestFiles)
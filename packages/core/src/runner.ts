import { fork } from 'child_process'
import { join } from 'path'
import { readdir } from 'fs/promises'
import { env } from 'process'
import { globby } from 'globby'
import { transform } from './transform'
import { outputFolderPath } from './shared'
import { cleanup } from './cleanup'

const getTestFiles = async () => {
  const paths = await globby(['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'], {
    ignore: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    absolute: true,
  })

  return paths
}

// first , a naive runner without involving paralleism

const runner = async (getTestFiles: () => Promise<string[]>) => {
  env.NODE_ENV = 'test'

  const testFiles = await getTestFiles()
  await transform(testFiles)

  const filenames = await readdir(outputFolderPath, {
    withFileTypes: true,
    encoding: 'utf-8',
  })

  const exitCodeList: number[] = []

  for (const testFile of filenames) {
    const absolutePath = join(outputFolderPath, testFile.name)

    const cmd = fork(absolutePath, {
      env: env
    })

    cmd.on('exit', code => {
      exitCodeList.push(code ?? 0)

      const len = filenames.length

      if (exitCodeList.length === len) {
        exitCodeList.forEach(c => {
          if (c !== 0) {
            process.exit(c)
          }
        })

        cleanup().then(() => {
          process.exit(0)
        })
      }
    })
    cmd.on('error', err => {
      throw err
    })
  }
}

export { runner, getTestFiles }

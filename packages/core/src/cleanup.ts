import { rm, access } from 'fs/promises'
import { constants } from 'fs'
import { exit } from 'process'
import { outputFolderPath } from './shared'
import chalk from 'chalk'


const rmTransformedTestFiles = async () => {
  try {
    await access(outputFolderPath, constants.F_OK)

    await rm(outputFolderPath, { force: true, recursive: true })

    console.log('clean up')
  } catch {
    console.error(
      chalk.redBright('transformation failed!')
    )
    exit(1)
  }
}


const cleanup = async () => {
  await rmTransformedTestFiles()
}

export {
  cleanup
}
import chalk from 'chalk'
import type { IReportee } from './types'
import { hookCenter } from './hook'

// some global context
const context = {
  name: ''
}


// a register, to register tests we need to run

const it = (name: string, callback: (ctx: unknown) => void) => {
  hookCenter.emit('before-each')

  try{
   callback(context)
  }catch(r: unknown) {
    //@ts-ignore
    const reportee = r as IReportee


    if(reportee.passed) {
      console.log(chalk.green(`${name} passed`))
    }else{
      console.warn(chalk.red(`${name} failed`))
      console.warn(chalk.green(`Expected: ${JSON.stringify(reportee.expected)}`))
      console.warn(chalk.red(`Received: ${JSON.stringify(reportee.received)}`))
    }
  }  

  hookCenter.emit('after-each')
}

const test = it


export {
  it,
  test
}
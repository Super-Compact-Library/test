import { Matcher } from "./matcher"


// an asset helper
const expect = <T = unknown>(received: T) => {

  return new Matcher(received)
}

export {
  expect
}
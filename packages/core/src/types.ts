interface IReportee<Value = unknown> {
  passed: boolean
  expected: Value
  received: Value
}

interface IMatcher<Value = unknown> {
  not: IMatcher<Value>
  toBe(expected: Value): void
}

export { IReportee, IMatcher }

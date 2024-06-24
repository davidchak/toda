export interface ILoggerMessage {
  text: string,
  module: string
}

export type LoggerServiceType = () => ({
  warn: (msg: ILoggerMessage) => void
  error: (msg: ILoggerMessage) => void
  info: (msg: ILoggerMessage) => void
})

import chalk from "chalk";
import { LoggerServiceType, ILoggerMessage } from "./types";


export const LoggerService: LoggerServiceType = () => {
  // FIXME: исправить вывод цветного текста
  const info = (msg: ILoggerMessage) => {
    const styled = chalk.blue;
    console.log(styled(['INFO']) + ` [${msg.module}] `  + new Date().toUTCString() + ` ${msg.text}.`)
  }

  // FIXME: исправить вывод цветного текста
  const warn = (msg: ILoggerMessage) => {
    const styled = chalk.yellow;
    console.log(styled(['WARN']) + ` [${msg.module}] `  + new Date().toUTCString() + ` ${msg.text}.`)
  }

  // FIXME: исправить вывод цветного текста
  const error = (msg: ILoggerMessage) => {
    const styled = chalk.red;
    console.log(styled(['INFO']) + ` [${msg.module}] `  + new Date().toUTCString() + ` ${msg.text}.`)
  }

  return {
    info,
    warn,
    error
  }
}

export type {
  ILoggerMessage,
  LoggerServiceType
}

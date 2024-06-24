import { pinoHttp } from "pino-http";
import chalk from "chalk";


const enum LoggerLevelsEnum {
  "info"="INFO",
  "warn"="WARN",
  "error"="ERROR",
}


export class LoggerService {
  private _instance = pinoHttp();

  private _outputStyles = {
    "INFO": chalk.blue,
    "WARN": chalk.yellow,
    "ERROR": chalk.red
  }

  private _createMessage(type: LoggerLevelsEnum, text: string, module: string|null){
    const timestamp = new Date().toUTCString();
    return module
      ? `${this._outputStyles[type]()}::[ ${module} ]::${timestamp}::${text}`
      : `${this._outputStyles[type]()}::${timestamp}::${text}`
  }

  public info(text: string, module: string|null = null){
    const msg = this._createMessage(LoggerLevelsEnum.info, text, module);
    this._instance.logger.info(msg);
  }

  public warn(text: string, module: string|null = null){
    const msg = this._createMessage(LoggerLevelsEnum.error, text, module);
    this._instance.logger.warn(msg);
  }

  public error(text: string, module: string|null = null){
    const msg = this._createMessage(LoggerLevelsEnum.error, text, module);
    this._instance.logger.error(msg);
  }
}

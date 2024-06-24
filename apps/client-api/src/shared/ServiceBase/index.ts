import { Router, Response } from "express";
import httpStatus from "http-status";

/**
 * Разрешенные для выполнения методы запросов к серверу
 */
export const enum RouteHTTPMethod {
  // Получение
  GET = "get",
  // Создание
  PORT = "post",
  // Частичное обновление
  PATCH = "patch",
  // Удаление
  DELETE = "delete",
}

/**
 * Описание роута
 */
export interface IRoute {
  path: string,
  method: RouteHTTPMethod,
  func: (args: any) => Promise<void>
}

/**
 * Описание базового абстрактного класса
 */
export interface IServiceBase {
  router: Router;
  bindRoutes: (routes: IRoute[]) => void;
}

export interface IMessage<T> {
  data?: T,
  error?: T
}

/**
 * Базовый абстрактный класс сервиса
 * @abstract
 */
export abstract class ServiceBase implements IServiceBase {
  private readonly _router: Router;

  constructor(){
    this._router = Router();
  }

  public get router(){
    return this._router;
  }

  private _send<T>(res: Response, code: number, message?: IMessage<T>){
    res.type("Application/json");
    return res.status(code).json(message);
  }

  /**
   * Успешное выполнение запроса на выборку или обновление данных
   * @param { Response } res - express.Response
   * @param { any } data - any data
   * @returns { IMessage } - результат выполнения запроса
   */
  public ok<T>(res: Response, data: T){
    return this._send<T>(res, 200, {
      data
    })
  }

  /**
   * Успешное выполнение запроса на создание нового объекта
   * @param { Response } res - express.Response
   * @param { any } data - any data
   * @returns { IMessage } - результат выполнения запроса
   */
  public created<T>(res: Response, data: T){
    return this._send<T>(res, 201, {
      data
    })
  }

  /**
   * Успешное выполнение запроса на удаление объекта
   * @param { Response } res - express.Response
   * @returns { IMessage } - результат выполнения запроса
   */
  public deleted<T>(res: Response){
    return this._send<T>(res, 204)
  }

  bindRoutes(routes: IRoute[]){
    routes.forEach(route => {
      const handler = route.func.bind(this);
      this._router[route.method](route.method, handler);
    })
  }
}

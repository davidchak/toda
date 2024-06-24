import { AxiosInstance } from "axios"


export type ApiServiceMethodsType = {
  getInstance: () => AxiosInstance
}

export type ApiServiceType = () => ApiServiceMethodsType;

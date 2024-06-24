import { ConfigServiceType } from "./type";


export const ConfigService: ConfigServiceType = function(){
  const  _prefix = "REACT_APP_"

  const getFromEnv = (key: string) => {
    return process.env[`${_prefix}${key}`] || undefined
  }

  return {
    getFromEnv,
  }
}

export type {
  ConfigServiceType
}

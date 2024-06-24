export type ConfigServiceType = () => ({
  getFromEnv: (key: string) => string|undefined;
})

export enum ServiceStatusTypes {
  UP = 'UP',
  DOWN = 'DOWN',
  WARNING = 'WARNING',
  UNKNOWN = 'UNKNOWN'
}

export type Status = {
  [serviceName: string]: ServiceStatusTypes
}
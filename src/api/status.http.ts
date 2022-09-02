import {http} from "./http";
import {ServiceStatusTypes, Status} from "../models/Status";

type GetStatusResponse = {
  [serviceName: string]: ServiceStatusTypes
}

export const getStatus = async (): Promise<Status> => http.get<GetStatusResponse>('/status')
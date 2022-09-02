import {http} from "./http";
import {Bus} from "../models/Bus";

type GetBusResponse = {
  buses: Array<{
    "brand": string,
    "registrationNumber": string,
    "maxPassengers": number,
    "length": number
  }>
}

type PostBusResponse = {
  "brand": string,
  "registrationNumber": string,
  "maxPassengers": number,
  "length": number
}

type PostBusRequest = {
  "brand": string,
  "registrationNumber": string,
  "maxPassengers": number,
  "length": number
}

export const getBuses = async (): Promise<{ buses: Bus[] }> => http.get<GetBusResponse>('/buses')
export const createBus = async (bus: Bus): Promise<Bus> => http.post<PostBusResponse, PostBusRequest>('/buses', bus)
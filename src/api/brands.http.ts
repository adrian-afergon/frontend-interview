import {http} from "./http";
import {Brand} from "../models/Brand";

type GetBradsResponse = {
  brands: Array<{
    "code": string,
    "value": string
  }>
}

export const getBrands = async (): Promise<{ brands: Brand[] }> => http.get<any>('/brands')
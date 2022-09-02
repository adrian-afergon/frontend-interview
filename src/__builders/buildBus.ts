import {Bus} from "../models/Bus";

export const buildBus = ({
                            length = 0,
                            registrationNumber = 'U0000X',
                            maxPassengers = 1,
                            brand = 'U-IRRELEVANT'
                          }: Partial<Bus> = {}): Bus => ({
  length,
  registrationNumber,
  maxPassengers,
  brand
})
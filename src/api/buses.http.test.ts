import {config} from "../config";
import nock from "nock";
import {createBus, getBuses} from "./buses.http";
import {buildBus} from "../__builders/buildBus";

describe('Buses Client', () => {

  const baseUrl = config.api

  it('should resolve GET /buses request given a 200 status', async () => {
    nock(baseUrl).get('/buses').reply(200, {
      buses: []
    }, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    await getBuses()
  })

  it('should resolve POST /buses request given a 201 status', async () => {
    nock(baseUrl).post('/buses').reply(201, {

    }, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    await createBus(buildBus())
  });

})
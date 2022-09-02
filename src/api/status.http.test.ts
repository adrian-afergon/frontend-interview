import nock from 'nock'
import {getStatus} from "./status.http";
import {config} from "../config";

describe('Status Client', () => {

  const baseUrl = config.api

  it('should resolve GET /status request given a 200 status', async () => {
    nock(baseUrl).get('/status').reply(200, {
      status: {
        buses: 'UP'
      }
    }, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    await getStatus()
  });

})
import nock from 'nock'
import {config} from "../config";
import {getBrands} from "./brands.http";

describe('Brands Client', () => {

  const baseUrl = config.api

  it('should resolve GET /brands request given a 200 status', async () => {
    nock(baseUrl).get('/brands').reply(200, {
      brands: []
    }, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    await getBrands()
  });

})
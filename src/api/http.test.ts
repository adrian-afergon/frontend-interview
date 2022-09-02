import nock from "nock";
import {http} from './http'
import {config} from "../config";


describe('Http Client', () => {

  const baseUrl = config.api

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }

  it('should be able to make http GET requests', async () => {
    const body = {result : 'irrelevant'};
    nock(baseUrl).get('/').reply(200, body, headers)

    const result = await http.get('/')

    expect(result).toEqual(body)
  });

  it('should be able to make http POST requests', async () => {
    const body = {result : 'irrelevant'};
    nock(baseUrl).post('/').reply(201, body, headers)

    const result = await http.post('/', {params: 'irrelevant'})

    expect(result).toEqual(body)
  });

});
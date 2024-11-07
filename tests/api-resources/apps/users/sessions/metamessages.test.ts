// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from 'honcho-ai';
import { Response } from 'node-fetch';

const client = new Honcho({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metamessages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.apps.users.sessions.metamessages.create(
      'app_id',
      'user_id',
      'session_id',
      { content: 'content', message_id: 'message_id', metamessage_type: 'metamessage_type' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.apps.users.sessions.metamessages.create('app_id', 'user_id', 'session_id', {
      content: 'content',
      message_id: 'message_id',
      metamessage_type: 'metamessage_type',
      metadata: { foo: 'bar' },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.apps.users.sessions.metamessages.update(
      'app_id',
      'user_id',
      'session_id',
      'metamessage_id',
      { message_id: 'message_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.apps.users.sessions.metamessages.update(
      'app_id',
      'user_id',
      'session_id',
      'metamessage_id',
      { message_id: 'message_id', metadata: { foo: 'bar' }, metamessage_type: 'metamessage_type' },
    );
  });

  test('list', async () => {
    const responsePromise = client.apps.users.sessions.metamessages.list(
      'app_id',
      'user_id',
      'session_id',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: only required params', async () => {
    const responsePromise = client.apps.users.sessions.metamessages.get(
      'app_id',
      'user_id',
      'session_id',
      'metamessage_id',
      { message_id: 'message_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.apps.users.sessions.metamessages.get(
      'app_id',
      'user_id',
      'session_id',
      'metamessage_id',
      { message_id: 'message_id' },
    );
  });
});

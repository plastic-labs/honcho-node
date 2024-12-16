// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from 'honcho-ai';
import { Response } from 'node-fetch';

const client = new Honcho({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.apps.users.sessions.messages.create('app_id', 'user_id', 'session_id', {
      content: 'content',
      is_user: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.apps.users.sessions.messages.create('app_id', 'user_id', 'session_id', {
      content: 'content',
      is_user: true,
      metadata: { foo: 'bar' },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.apps.users.sessions.messages.update(
      'app_id',
      'user_id',
      'session_id',
      'message_id',
      { metadata: { foo: 'bar' } },
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
    const response = await client.apps.users.sessions.messages.update(
      'app_id',
      'user_id',
      'session_id',
      'message_id',
      { metadata: { foo: 'bar' } },
    );
  });

  test('list', async () => {
    const responsePromise = client.apps.users.sessions.messages.list('app_id', 'user_id', 'session_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batch: only required params', async () => {
    const responsePromise = client.apps.users.sessions.messages.batch('app_id', 'user_id', 'session_id', {
      messages: [{ content: 'content', is_user: true }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batch: required and optional params', async () => {
    const response = await client.apps.users.sessions.messages.batch('app_id', 'user_id', 'session_id', {
      messages: [{ content: 'content', is_user: true, metadata: { foo: 'bar' } }],
    });
  });

  test('get', async () => {
    const responsePromise = client.apps.users.sessions.messages.get(
      'app_id',
      'user_id',
      'session_id',
      'message_id',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.users.sessions.messages.get('app_id', 'user_id', 'session_id', 'message_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Honcho.NotFoundError);
  });
});

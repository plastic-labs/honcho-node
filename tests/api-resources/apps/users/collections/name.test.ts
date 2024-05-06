// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from 'honcho';
import { Response } from 'node-fetch';

const honcho = new Honcho({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource name', () => {
  test('retrieve', async () => {
    const responsePromise = honcho.apps.users.collections.name.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'string',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      honcho.apps.users.collections.name.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        'string',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Honcho.NotFoundError);
  });
});

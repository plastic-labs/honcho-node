// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_keys',
  description: 'Create a new Key',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app to scope the key to',
      },
      collection_id: {
        type: 'string',
        title: 'Collection Id',
        description: 'ID of the collection to scope the key to',
      },
      expires_at: {
        type: 'string',
        title: 'Expires At',
        format: 'date-time',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session to scope the key to',
      },
      user_id: {
        type: 'string',
        title: 'User Id',
        description: 'ID of the user to scope the key to',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { ...body } = args;
  return client.keys.create(body);
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_users_apps_collections',
  description: 'Delete a Collection and its documents',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
      },
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      collection_id: {
        type: 'string',
        title: 'Collection Id',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, collection_id } = args;
  return client.apps.users.collections.delete(app_id, user_id, collection_id);
};

export default { metadata, tool, handler };

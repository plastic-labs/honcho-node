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
  name: 'update_users_apps_collections',
  description: "Update a Collection's name or metadata",
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
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, collection_id, ...body } = args;
  return client.apps.users.collections.update(app_id, user_id, collection_id, body);
};

export default { metadata, tool, handler };

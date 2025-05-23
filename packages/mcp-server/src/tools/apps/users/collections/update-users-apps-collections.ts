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
        description: 'ID of the app',
      },
      user_id: {
        type: 'string',
        title: 'User Id',
        description: 'ID of the user',
      },
      collection_id: {
        type: 'string',
        title: 'Collection Id',
        description: 'ID of the collection to update',
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

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, collection_id, ...body } = args as any;
  return client.apps.users.collections.update(app_id, user_id, collection_id, body);
};

export default { metadata, tool, handler };

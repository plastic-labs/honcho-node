// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_by_name_users_apps_collections',
  description: 'Get a Collection by Name',
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
      name: {
        type: 'string',
        title: 'Name',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, name } = args;
  return client.apps.users.collections.getByName(app_id, user_id, name);
};

export default { metadata, tool, handler };

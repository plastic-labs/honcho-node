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
  name: 'list_users_apps_collections',
  description: 'Get All Collections for a User',
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
      page: {
        type: 'integer',
        title: 'Page',
        description: 'Page number',
      },
      reverse: {
        type: 'boolean',
        title: 'Reverse',
      },
      size: {
        type: 'integer',
        title: 'Size',
        description: 'Page size',
      },
      filter: {
        type: 'object',
        title: 'Filter',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, ...body } = args;
  return client.apps.users.collections.list(app_id, user_id, body);
};

export default { metadata, tool, handler };

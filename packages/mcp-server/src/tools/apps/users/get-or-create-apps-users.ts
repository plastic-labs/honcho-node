// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_or_create_apps_users',
  description: 'Get a User or create a new one by the input name',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, name } = args;
  return client.apps.users.getOrCreate(app_id, name);
};

export default { metadata, tool, handler };

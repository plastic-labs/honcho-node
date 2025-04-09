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
  name: 'get_by_name_apps_users',
  description: 'Get a User by name',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'ID of the app',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'Name of the user to retrieve',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, name } = args;
  return client.apps.users.getByName(app_id, name);
};

export default { metadata, tool, handler };

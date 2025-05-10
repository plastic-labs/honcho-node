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
  name: 'get_apps_users',
  description:
    'Get a User by ID\n\nIf user_id is provided as a query parameter, it uses that (must match JWT app_id).\nOtherwise, it uses the user_id from the JWT token.',
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
        description: 'User ID to retrieve. If not provided, users JWT token',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  return client.apps.users.get(app_id, body);
};

export default { metadata, tool, handler };

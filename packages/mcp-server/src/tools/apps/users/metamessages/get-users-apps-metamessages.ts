// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.metamessages',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_users_apps_metamessages',
  description: 'Get a specific Metamessage by ID',
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
      metamessage_id: {
        type: 'string',
        title: 'Metamessage Id',
        description: 'ID of the metamessage to retrieve',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, metamessage_id } = args;
  return client.apps.users.metamessages.get(app_id, user_id, metamessage_id);
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.metamessages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_users_apps_metamessages',
  description: "Update a metamessage's metadata, type, or relationships",
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
        description: 'ID of the metamessage to update',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      metamessage_type: {
        type: 'string',
        title: 'Metamessage Type',
      },
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
    },
  },
};

export const handler = (client: Honcho, args: Record<string, unknown> | undefined) => {
  const { app_id, user_id, metamessage_id, ...body } = args as any;
  return client.apps.users.metamessages.update(app_id, user_id, metamessage_id, body);
};

export default { metadata, tool, handler };

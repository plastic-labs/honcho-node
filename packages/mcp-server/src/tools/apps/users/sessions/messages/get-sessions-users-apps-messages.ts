// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions.messages',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_sessions_users_apps_messages',
  description: 'Get a Message by ID',
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
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, message_id } = args;
  return client.apps.users.sessions.messages.get(app_id, user_id, session_id, message_id);
};

export default { metadata, tool, handler };

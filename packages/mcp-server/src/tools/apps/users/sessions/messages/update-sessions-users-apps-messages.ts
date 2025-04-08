// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions.messages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_sessions_users_apps_messages',
  description: 'Update the metadata of a Message',
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
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, message_id, ...body } = args;
  return client.apps.users.sessions.messages.update(app_id, user_id, session_id, message_id, body);
};

export default { metadata, tool, handler };

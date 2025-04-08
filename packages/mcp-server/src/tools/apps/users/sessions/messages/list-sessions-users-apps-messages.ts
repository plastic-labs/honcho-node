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
  name: 'list_sessions_users_apps_messages',
  description: 'Get all messages for a session',
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
  const { app_id, user_id, session_id, ...body } = args;
  return client.apps.users.sessions.messages.list(app_id, user_id, session_id, body);
};

export default { metadata, tool, handler };

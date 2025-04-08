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
  name: 'batch_sessions_users_apps_messages',
  description: 'Bulk create messages for a session while maintaining order. Maximum 100 messages per batch.',
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
      messages: {
        type: 'array',
        title: 'Messages',
        items: {
          type: 'object',
          title: 'MessageCreate',
          properties: {
            content: {
              type: 'string',
              title: 'Content',
            },
            is_user: {
              type: 'boolean',
              title: 'Is User',
            },
            metadata: {
              type: 'object',
              title: 'Metadata',
            },
          },
          required: ['content', 'is_user'],
        },
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, ...body } = args;
  return client.apps.users.sessions.messages.batch(app_id, user_id, session_id, body);
};

export default { metadata, tool, handler };

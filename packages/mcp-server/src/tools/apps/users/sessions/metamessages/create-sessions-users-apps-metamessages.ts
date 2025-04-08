// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions.metamessages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_sessions_users_apps_metamessages',
  description: 'Adds a message to a session',
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
      content: {
        type: 'string',
        title: 'Content',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
      },
      metamessage_type: {
        type: 'string',
        title: 'Metamessage Type',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, ...body } = args;
  return client.apps.users.sessions.metamessages.create(app_id, user_id, session_id, body);
};

export default { metadata, tool, handler };

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
  name: 'update_sessions_users_apps_metamessages',
  description: "Update's the metadata of a metamessage",
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
      metamessage_id: {
        type: 'string',
        title: 'Metamessage Id',
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
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, metamessage_id, ...body } = args;
  return client.apps.users.sessions.metamessages.update(app_id, user_id, session_id, metamessage_id, body);
};

export default { metadata, tool, handler };

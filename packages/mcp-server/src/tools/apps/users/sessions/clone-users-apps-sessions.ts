// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.sessions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'clone_users_apps_sessions',
  description: 'Clone a session for a user, optionally will deep clone metamessages as well',
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
      deep_copy: {
        type: 'boolean',
        title: 'Deep Copy',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, ...body } = args;
  return client.apps.users.sessions.clone(app_id, user_id, session_id, body);
};

export default { metadata, tool, handler };

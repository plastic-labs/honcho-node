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
  description: 'Clone a session, optionally up to a specific message',
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
      session_id: {
        type: 'string',
        title: 'Session Id',
        description: 'ID of the session to clone',
      },
      deep_copy: {
        type: 'boolean',
        title: 'Deep Copy',
        description: 'Whether to deep copy metamessages',
      },
      message_id: {
        type: 'string',
        title: 'Message Id',
        description: 'Message ID to cut off the clone at',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, session_id, ...body } = args;
  return client.apps.users.sessions.clone(app_id, user_id, session_id, body);
};

export default { metadata, tool, handler };

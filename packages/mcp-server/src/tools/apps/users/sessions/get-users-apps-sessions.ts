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
  name: 'get_users_apps_sessions',
  description:
    'Get a specific session for a user.\n\nIf session_id is provided as a query parameter, it uses that (must match JWT session_id).\nOtherwise, it uses the session_id from the JWT token.',
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
        description: 'Session ID to retrieve. If not provided, uses JWT token',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, ...body } = args;
  return client.apps.users.sessions.get(app_id, user_id, body);
};

export default { metadata, tool, handler };

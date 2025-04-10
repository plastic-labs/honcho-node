// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_apps',
  description:
    'Get an App by ID.\n\nIf app_id is provided as a query parameter, it uses that (must match JWT app_id).\nOtherwise, it uses the app_id from the JWT token.',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
        description: 'App ID to retrieve. If not provided, uses JWT token',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { ...body } = args;
  return client.apps.get(body);
};

export default { metadata, tool, handler };

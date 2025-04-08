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
  description: 'Get an App by ID',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        title: 'App Id',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id } = args;
  return client.apps.get(app_id);
};

export default { metadata, tool, handler };

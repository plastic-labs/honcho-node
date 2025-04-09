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
  name: 'get_or_create_apps',
  description: 'Get or Create an App',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        description: 'Name of the app to get or create',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { name } = args;
  return client.apps.getOrCreate(name);
};

export default { metadata, tool, handler };

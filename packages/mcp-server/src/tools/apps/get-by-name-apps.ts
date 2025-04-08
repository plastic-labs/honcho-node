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
  name: 'get_by_name_apps',
  description: 'Get an App by Name',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { name } = args;
  return client.apps.getByName(name);
};

export default { metadata, tool, handler };

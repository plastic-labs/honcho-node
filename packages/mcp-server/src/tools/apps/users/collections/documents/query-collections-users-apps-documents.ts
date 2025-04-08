// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections.documents',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'query_collections_users_apps_documents',
  description: 'Cosine Similarity Search for Documents',
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
      collection_id: {
        type: 'string',
        title: 'Collection Id',
      },
      query: {
        type: 'string',
        title: 'Query',
      },
      filter: {
        type: 'object',
        title: 'Filter',
      },
      top_k: {
        type: 'integer',
        title: 'Top K',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, collection_id, ...body } = args;
  return client.apps.users.collections.documents.query(app_id, user_id, collection_id, body);
};

export default { metadata, tool, handler };

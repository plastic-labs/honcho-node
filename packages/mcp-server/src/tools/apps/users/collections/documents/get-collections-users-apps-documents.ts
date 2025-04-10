// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Honcho from 'honcho-ai';

export const metadata: Metadata = {
  resource: 'apps.users.collections.documents',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_collections_users_apps_documents',
  description: 'Get a document by ID',
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
      collection_id: {
        type: 'string',
        title: 'Collection Id',
        description: 'ID of the collection',
      },
      document_id: {
        type: 'string',
        title: 'Document Id',
        description: 'ID of the document to retrieve',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, collection_id, document_id } = args;
  return client.apps.users.collections.documents.get(app_id, user_id, collection_id, document_id);
};

export default { metadata, tool, handler };

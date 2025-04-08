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
  name: 'update_collections_users_apps_documents',
  description: 'Update the content and/or the metadata of a Document',
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
      document_id: {
        type: 'string',
        title: 'Document Id',
      },
      content: {
        type: 'string',
        title: 'Content',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = (client: Honcho, args: any) => {
  const { app_id, user_id, collection_id, document_id, ...body } = args;
  return client.apps.users.collections.documents.update(app_id, user_id, collection_id, document_id, body);
};

export default { metadata, tool, handler };

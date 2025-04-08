// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Honcho from 'honcho-ai';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_apps from './apps/create-apps';
import update_apps from './apps/update-apps';
import get_apps from './apps/get-apps';
import get_by_name_apps from './apps/get-by-name-apps';
import get_or_create_apps from './apps/get-or-create-apps';
import create_apps_users from './apps/users/create-apps-users';
import update_apps_users from './apps/users/update-apps-users';
import list_apps_users from './apps/users/list-apps-users';
import get_apps_users from './apps/users/get-apps-users';
import get_by_name_apps_users from './apps/users/get-by-name-apps-users';
import get_or_create_apps_users from './apps/users/get-or-create-apps-users';
import list_users_apps_metamessages from './apps/users/metamessages/list-users-apps-metamessages';
import create_users_apps_sessions from './apps/users/sessions/create-users-apps-sessions';
import update_users_apps_sessions from './apps/users/sessions/update-users-apps-sessions';
import list_users_apps_sessions from './apps/users/sessions/list-users-apps-sessions';
import delete_users_apps_sessions from './apps/users/sessions/delete-users-apps-sessions';
import chat_users_apps_sessions from './apps/users/sessions/chat-users-apps-sessions';
import clone_users_apps_sessions from './apps/users/sessions/clone-users-apps-sessions';
import get_users_apps_sessions from './apps/users/sessions/get-users-apps-sessions';
import stream_users_apps_sessions from './apps/users/sessions/stream-users-apps-sessions';
import create_sessions_users_apps_messages from './apps/users/sessions/messages/create-sessions-users-apps-messages';
import update_sessions_users_apps_messages from './apps/users/sessions/messages/update-sessions-users-apps-messages';
import list_sessions_users_apps_messages from './apps/users/sessions/messages/list-sessions-users-apps-messages';
import batch_sessions_users_apps_messages from './apps/users/sessions/messages/batch-sessions-users-apps-messages';
import get_sessions_users_apps_messages from './apps/users/sessions/messages/get-sessions-users-apps-messages';
import create_sessions_users_apps_metamessages from './apps/users/sessions/metamessages/create-sessions-users-apps-metamessages';
import update_sessions_users_apps_metamessages from './apps/users/sessions/metamessages/update-sessions-users-apps-metamessages';
import list_sessions_users_apps_metamessages from './apps/users/sessions/metamessages/list-sessions-users-apps-metamessages';
import get_sessions_users_apps_metamessages from './apps/users/sessions/metamessages/get-sessions-users-apps-metamessages';
import create_users_apps_collections from './apps/users/collections/create-users-apps-collections';
import update_users_apps_collections from './apps/users/collections/update-users-apps-collections';
import list_users_apps_collections from './apps/users/collections/list-users-apps-collections';
import delete_users_apps_collections from './apps/users/collections/delete-users-apps-collections';
import get_users_apps_collections from './apps/users/collections/get-users-apps-collections';
import get_by_name_users_apps_collections from './apps/users/collections/get-by-name-users-apps-collections';
import create_collections_users_apps_documents from './apps/users/collections/documents/create-collections-users-apps-documents';
import update_collections_users_apps_documents from './apps/users/collections/documents/update-collections-users-apps-documents';
import list_collections_users_apps_documents from './apps/users/collections/documents/list-collections-users-apps-documents';
import delete_collections_users_apps_documents from './apps/users/collections/documents/delete-collections-users-apps-documents';
import get_collections_users_apps_documents from './apps/users/collections/documents/get-collections-users-apps-documents';
import query_collections_users_apps_documents from './apps/users/collections/documents/query-collections-users-apps-documents';

export type HandlerFunction = (client: Honcho, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_apps);
addEndpoint(update_apps);
addEndpoint(get_apps);
addEndpoint(get_by_name_apps);
addEndpoint(get_or_create_apps);
addEndpoint(create_apps_users);
addEndpoint(update_apps_users);
addEndpoint(list_apps_users);
addEndpoint(get_apps_users);
addEndpoint(get_by_name_apps_users);
addEndpoint(get_or_create_apps_users);
addEndpoint(list_users_apps_metamessages);
addEndpoint(create_users_apps_sessions);
addEndpoint(update_users_apps_sessions);
addEndpoint(list_users_apps_sessions);
addEndpoint(delete_users_apps_sessions);
addEndpoint(chat_users_apps_sessions);
addEndpoint(clone_users_apps_sessions);
addEndpoint(get_users_apps_sessions);
addEndpoint(stream_users_apps_sessions);
addEndpoint(create_sessions_users_apps_messages);
addEndpoint(update_sessions_users_apps_messages);
addEndpoint(list_sessions_users_apps_messages);
addEndpoint(batch_sessions_users_apps_messages);
addEndpoint(get_sessions_users_apps_messages);
addEndpoint(create_sessions_users_apps_metamessages);
addEndpoint(update_sessions_users_apps_metamessages);
addEndpoint(list_sessions_users_apps_metamessages);
addEndpoint(get_sessions_users_apps_metamessages);
addEndpoint(create_users_apps_collections);
addEndpoint(update_users_apps_collections);
addEndpoint(list_users_apps_collections);
addEndpoint(delete_users_apps_collections);
addEndpoint(get_users_apps_collections);
addEndpoint(get_by_name_users_apps_collections);
addEndpoint(create_collections_users_apps_documents);
addEndpoint(update_collections_users_apps_documents);
addEndpoint(list_collections_users_apps_documents);
addEndpoint(delete_collections_users_apps_documents);
addEndpoint(get_collections_users_apps_documents);
addEndpoint(query_collections_users_apps_documents);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}

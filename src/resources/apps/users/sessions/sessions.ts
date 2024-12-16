// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as MessagesAPI from './messages';
import {
  Message,
  MessageBatchParams,
  MessageBatchResponse,
  MessageCreateParams,
  MessageListParams,
  MessageUpdateParams,
  Messages,
  MessagesPage,
  PageMessage,
} from './messages';
import * as MetamessagesAPI from './metamessages';
import {
  Metamessage,
  MetamessageCreateParams,
  MetamessageGetParams,
  MetamessageListParams,
  MetamessageUpdateParams,
  Metamessages,
  MetamessagesPage,
  PageMetamessage,
} from './metamessages';
import { Page, type PageParams } from '../../../../pagination';

export class Sessions extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  metamessages: MetamessagesAPI.Metamessages = new MetamessagesAPI.Metamessages(this._client);

  /**
   * Create a Session for a User
   */
  create(
    appId: string,
    userId: string,
    body: SessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions`, { body, ...options });
  }

  /**
   * Update the metadata of a Session
   */
  update(
    appId: string,
    userId: string,
    sessionId: string,
    body: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.put(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * Get All Sessions for a User
   */
  list(
    appId: string,
    userId: string,
    params: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/apps/${appId}/users/${userId}/sessions/list`, SessionsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a session by marking it as inactive
   */
  delete(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}`, options);
  }

  /**
   * Chat with the Dialectic API
   */
  chat(
    appId: string,
    userId: string,
    sessionId: string,
    body: SessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentChat> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/chat`, {
      body,
      ...options,
    });
  }

  /**
   * Clone a session for a user, optionally will deep clone metamessages as well
   */
  clone(
    appId: string,
    userId: string,
    sessionId: string,
    query?: SessionCloneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  clone(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session>;
  clone(
    appId: string,
    userId: string,
    sessionId: string,
    query: SessionCloneParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(query)) {
      return this.clone(appId, userId, sessionId, {}, query);
    }
    return this._client.get(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/clone`, {
      query,
      ...options,
    });
  }

  /**
   * Get a specific session for a user by ID
   */
  get(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.get(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}`, options);
  }

  /**
   * Stream Results from the Dialectic API
   */
  stream(
    appId: string,
    userId: string,
    sessionId: string,
    body: SessionStreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/chat/stream`, {
      body,
      ...options,
    });
  }
}

export class SessionsPage extends Page<Session> {}

export interface AgentChat {
  content: string;
}

export interface PageSession {
  items: Array<Session>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface Session {
  id: string;

  created_at: string;

  is_active: boolean;

  metadata: Record<string, unknown>;

  user_id: string;
}

export type SessionDeleteResponse = unknown;

export type SessionStreamResponse = unknown;

export interface SessionCreateParams {
  metadata?: Record<string, unknown>;
}

export interface SessionUpdateParams {
  metadata: Record<string, unknown>;
}

export interface SessionListParams extends PageParams {
  /**
   * Query param:
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;

  /**
   * Body param:
   */
  is_active?: boolean;
}

export interface SessionChatParams {
  queries: string | Array<string>;
}

export interface SessionCloneParams {
  deep_copy?: boolean;

  message_id?: string | null;
}

export interface SessionStreamParams {
  queries: string | Array<string>;
}

Sessions.SessionsPage = SessionsPage;
Sessions.Messages = Messages;
Sessions.MessagesPage = MessagesPage;
Sessions.Metamessages = Metamessages;
Sessions.MetamessagesPage = MetamessagesPage;

export declare namespace Sessions {
  export {
    type AgentChat as AgentChat,
    type PageSession as PageSession,
    type Session as Session,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionStreamResponse as SessionStreamResponse,
    SessionsPage as SessionsPage,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionChatParams as SessionChatParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionStreamParams as SessionStreamParams,
  };

  export {
    Messages as Messages,
    type Message as Message,
    type PageMessage as PageMessage,
    type MessageBatchResponse as MessageBatchResponse,
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageBatchParams as MessageBatchParams,
  };

  export {
    Metamessages as Metamessages,
    type Metamessage as Metamessage,
    type PageMetamessage as PageMetamessage,
    MetamessagesPage as MetamessagesPage,
    type MetamessageCreateParams as MetamessageCreateParams,
    type MetamessageUpdateParams as MetamessageUpdateParams,
    type MetamessageListParams as MetamessageListParams,
    type MetamessageGetParams as MetamessageGetParams,
  };
}

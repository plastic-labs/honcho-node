// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as MessagesAPI from './messages';
import {
  Message,
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
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session (schemas.SessionCreate): The Session object containing any metadata
   *
   * Returns: schemas.Session: The Session object of the new Session
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
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (str): The ID of the Session to update session
   * (schemas.SessionUpdate): The Session object containing any new metadata
   *
   * Returns: schemas.Session: The Session object of the updated Session
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
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   *
   * Returns: list[schemas.Session]: List of Session objects
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
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (str): The ID of the Session to delete
   *
   * Returns: dict: A message indicating that the session was deleted
   *
   * Raises: HTTPException: If the session is not found
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
   * Chat
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
   * Clone Session
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
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (str): The ID of the Session to retrieve
   *
   * Returns: schemas.Session: The Session object of the requested Session
   *
   * Raises: HTTPException: If the session is not found
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
   * Get Chat Stream
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
  metadata?: Record<string, unknown> | null;
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
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
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

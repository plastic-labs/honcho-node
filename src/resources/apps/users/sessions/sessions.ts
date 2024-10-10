// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SessionsAPI from './sessions';
import * as MessagesAPI from './messages';
import * as MetamessagesAPI from './metamessages';
import { Page, type PageParams } from '../../../../pagination';

export class Sessions extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  metamessages: MetamessagesAPI.Metamessages = new MetamessagesAPI.Metamessages(this._client);

  /**
   * Create a Session for a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user session (schemas.SessionCreate): The Session object containing any
   * metadata
   *
   * Returns: schemas.Session: The Session object of the new Session
   */
  create(
    appId: string,
    userId: string,
    body: SessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/apps/${appId}/users/${userId}/sessions`, { body, ...options });
  }

  /**
   * Update the metadata of a Session
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user session_id (uuid.UUID): The ID of the Session to update session
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
    return this._client.put(`/apps/${appId}/users/${userId}/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * Get All Sessions for a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user
   *
   * Returns: list[schemas.Session]: List of Session objects
   */
  list(
    appId: string,
    userId: string,
    query?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session>;
  list(appId: string, userId: string, options?: Core.RequestOptions): Core.PagePromise<SessionsPage, Session>;
  list(
    appId: string,
    userId: string,
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsPage, Session> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, {}, query);
    }
    return this._client.getAPIList(`/apps/${appId}/users/${userId}/sessions`, SessionsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a session by marking it as inactive
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user session_id (uuid.UUID): The ID of the Session to delete
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
    return this._client.delete(`/apps/${appId}/users/${userId}/sessions/${sessionId}`, options);
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
    return this._client.post(`/apps/${appId}/users/${userId}/sessions/${sessionId}/chat`, {
      body,
      ...options,
    });
  }

  /**
   * Get a specific session for a user by ID
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user session_id (uuid.UUID): The ID of the Session to retrieve
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
    return this._client.get(`/apps/${appId}/users/${userId}/sessions/${sessionId}`, options);
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
    return this._client.post(`/apps/${appId}/users/${userId}/sessions/${sessionId}/chat/stream`, {
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
  metadata?: Record<string, unknown> | null;
}

export interface SessionUpdateParams {
  metadata?: Record<string, unknown> | null;
}

export interface SessionListParams extends PageParams {
  filter?: string | null;

  is_active?: boolean | null;

  reverse?: boolean | null;
}

export interface SessionChatParams {
  queries: string | Array<string>;
}

export interface SessionStreamParams {
  queries: string | Array<string>;
}

export namespace Sessions {
  export import AgentChat = SessionsAPI.AgentChat;
  export import PageSession = SessionsAPI.PageSession;
  export import Session = SessionsAPI.Session;
  export import SessionDeleteResponse = SessionsAPI.SessionDeleteResponse;
  export import SessionStreamResponse = SessionsAPI.SessionStreamResponse;
  export import SessionsPage = SessionsAPI.SessionsPage;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import SessionChatParams = SessionsAPI.SessionChatParams;
  export import SessionStreamParams = SessionsAPI.SessionStreamParams;
  export import Messages = MessagesAPI.Messages;
  export import Message = MessagesAPI.Message;
  export import PageMessage = MessagesAPI.PageMessage;
  export import MessagesPage = MessagesAPI.MessagesPage;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessageUpdateParams = MessagesAPI.MessageUpdateParams;
  export import MessageListParams = MessagesAPI.MessageListParams;
  export import Metamessages = MetamessagesAPI.Metamessages;
  export import Metamessage = MetamessagesAPI.Metamessage;
  export import PageMetamessage = MetamessagesAPI.PageMetamessage;
  export import MetamessagesPage = MetamessagesAPI.MetamessagesPage;
  export import MetamessageCreateParams = MetamessagesAPI.MetamessageCreateParams;
  export import MetamessageUpdateParams = MetamessagesAPI.MetamessageUpdateParams;
  export import MetamessageListParams = MetamessagesAPI.MetamessageListParams;
  export import MetamessageGetParams = MetamessagesAPI.MetamessageGetParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as SessionsAPI from 'honcho/resources/apps/users/sessions/sessions';
import * as MessagesAPI from 'honcho/resources/apps/users/sessions/messages';
import * as MetamessagesAPI from 'honcho/resources/apps/users/sessions/metamessages';

export class Sessions extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  metamessages: MetamessagesAPI.Metamessages = new MetamessagesAPI.Metamessages(this._client);

  /**
   * Create a Session for a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user session (schemas.SessionCreate): The Session object containing any
   * metadata and a location ID
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
   * the user location_id (str, optional): Optional Location ID representing the
   * location of a session
   *
   * Returns: list[schemas.Session]: List of Session objects
   */
  list(
    appId: string,
    userId: string,
    query?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageSession>;
  list(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<PageSession>;
  list(
    appId: string,
    userId: string,
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageSession> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, {}, query);
    }
    return this._client.get(`/apps/${appId}/users/${userId}/sessions`, { query, ...options });
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
   * Get Chat
   */
  chat(
    appId: string,
    userId: string,
    sessionId: string,
    query: SessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentChat> {
    return this._client.get(`/apps/${appId}/users/${userId}/sessions/${sessionId}/chat`, {
      query,
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
    query: SessionStreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.get(`/apps/${appId}/users/${userId}/sessions/${sessionId}/chat/stream`, {
      query,
      ...options,
    });
  }
}

export interface AgentChat {
  content: string;
}

export interface PageSession {
  items: Array<Session>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export interface Session {
  id: string;

  created_at: string;

  is_active: boolean;

  location_id: string;

  metadata: unknown;

  user_id: string;
}

export type SessionDeleteResponse = unknown;

export type SessionStreamResponse = unknown;

export interface SessionCreateParams {
  location_id: string;

  metadata?: unknown | null;
}

export interface SessionUpdateParams {
  metadata?: unknown | null;
}

export interface SessionListParams {
  filter?: string | null;

  is_active?: boolean | null;

  location_id?: string | null;

  /**
   * Page number
   */
  page?: number;

  reverse?: boolean | null;

  /**
   * Page size
   */
  size?: number;
}

export interface SessionChatParams {
  query: string;
}

export interface SessionStreamParams {
  query: string;
}

export namespace Sessions {
  export import AgentChat = SessionsAPI.AgentChat;
  export import PageSession = SessionsAPI.PageSession;
  export import Session = SessionsAPI.Session;
  export import SessionDeleteResponse = SessionsAPI.SessionDeleteResponse;
  export import SessionStreamResponse = SessionsAPI.SessionStreamResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import SessionChatParams = SessionsAPI.SessionChatParams;
  export import SessionStreamParams = SessionsAPI.SessionStreamParams;
  export import Messages = MessagesAPI.Messages;
  export import Message = MessagesAPI.Message;
  export import PageMessage = MessagesAPI.PageMessage;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessageUpdateParams = MessagesAPI.MessageUpdateParams;
  export import MessageListParams = MessagesAPI.MessageListParams;
  export import Metamessages = MetamessagesAPI.Metamessages;
  export import Metamessage = MetamessagesAPI.Metamessage;
  export import PageMetamessage = MetamessagesAPI.PageMetamessage;
  export import MetamessageCreateParams = MetamessagesAPI.MetamessageCreateParams;
  export import MetamessageUpdateParams = MetamessagesAPI.MetamessageUpdateParams;
  export import MetamessageListParams = MetamessagesAPI.MetamessageListParams;
  export import MetamessageGetParams = MetamessagesAPI.MetamessageGetParams;
}

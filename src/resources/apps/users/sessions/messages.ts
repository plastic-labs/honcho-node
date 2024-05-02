// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as MessagesAPI from 'honcho/resources/apps/users/sessions/messages';
import { Page, type PageParams } from 'honcho/pagination';

export class Messages extends APIResource {
  /**
   * Adds a message to a session
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user session_id (int): The ID of the Session to add the message to message
   * (schemas.MessageCreate): The Message object to add containing the message
   * content and type
   *
   * Returns: schemas.Message: The Message object of the added message
   *
   * Raises: HTTPException: If the session is not found
   */
  create(
    appId: string,
    userId: string,
    sessionId: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return this._client.post(`/apps/${appId}/users/${userId}/sessions/${sessionId}/messages`, {
      body,
      ...options,
    });
  }

  /**
   * Update's the metadata of a message
   */
  update(
    appId: string,
    userId: string,
    sessionId: string,
    messageId: string,
    body: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return this._client.put(`/apps/${appId}/users/${userId}/sessions/${sessionId}/messages/${messageId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get all messages for a session
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user session_id (int): The ID of the Session to retrieve reverse (bool): Whether
   * to reverse the order of the messages
   *
   * Returns: list[schemas.Message]: List of Message objects
   *
   * Raises: HTTPException: If the session is not found
   */
  list(
    appId: string,
    userId: string,
    sessionId: string,
    query?: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message>;
  list(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message>;
  list(
    appId: string,
    userId: string,
    sessionId: string,
    query: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, sessionId, {}, query);
    }
    return this._client.getAPIList(
      `/apps/${appId}/users/${userId}/sessions/${sessionId}/messages`,
      MessagesPage,
      { query, ...options },
    );
  }

  /**
   * Get Message
   */
  get(
    appId: string,
    userId: string,
    sessionId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return this._client.get(
      `/apps/${appId}/users/${userId}/sessions/${sessionId}/messages/${messageId}`,
      options,
    );
  }
}

export class MessagesPage extends Page<Message> {}

export interface Message {
  id: string;

  content: string;

  created_at: string;

  is_user: boolean;

  metadata: Message.Metadata;

  session_id: string;
}

export namespace Message {
  export interface Metadata {}
}

export interface PageMessage {
  items: Array<Message>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface MessageCreateParams {
  content: string;

  is_user: boolean;

  metadata?: MessageCreateParams.Metadata | null;
}

export namespace MessageCreateParams {
  export interface Metadata {}
}

export interface MessageUpdateParams {
  metadata?: MessageUpdateParams.Metadata | null;
}

export namespace MessageUpdateParams {
  export interface Metadata {}
}

export interface MessageListParams extends PageParams {
  filter?: string | null;

  reverse?: boolean | null;
}

export namespace Messages {
  export import Message = MessagesAPI.Message;
  export import PageMessage = MessagesAPI.PageMessage;
  export import MessagesPage = MessagesAPI.MessagesPage;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessageUpdateParams = MessagesAPI.MessageUpdateParams;
  export import MessageListParams = MessagesAPI.MessageListParams;
}

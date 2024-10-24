// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as MessagesAPI from './messages';
import { Page, type PageParams } from '../../../../pagination';

export class Messages extends APIResource {
  /**
   * Adds a message to a session
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (int): The ID of the Session to add the message to message
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
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/messages`, {
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
    return this._client.put(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/messages/${messageId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get all messages for a session
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (int): The ID of the Session to retrieve reverse (bool): Whether to
   * reverse the order of the messages
   *
   * Returns: list[schemas.Message]: List of Message objects
   *
   * Raises: HTTPException: If the session is not found
   */
  list(
    appId: string,
    userId: string,
    sessionId: string,
    params: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesPage, Message> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(
      `/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/messages/list`,
      MessagesPage,
      { query: { page, reverse, size }, body, method: 'post', ...options },
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
      `/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/messages/${messageId}`,
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

  metadata: Record<string, unknown>;

  session_id: string;
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

  metadata?: Record<string, unknown>;
}

export interface MessageUpdateParams {
  metadata?: Record<string, unknown> | null;
}

export interface MessageListParams extends PageParams {
  /**
   * Query param:
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

export namespace Messages {
  export import Message = MessagesAPI.Message;
  export import PageMessage = MessagesAPI.PageMessage;
  export import MessagesPage = MessagesAPI.MessagesPage;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
  export import MessageUpdateParams = MessagesAPI.MessageUpdateParams;
  export import MessageListParams = MessagesAPI.MessageListParams;
}

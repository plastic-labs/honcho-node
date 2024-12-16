// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { Page, type PageParams } from '../../../../pagination';

export class Messages extends APIResource {
  /**
   * Adds a message to a session
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
   * Update the metadata of a Message
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
   * Bulk create messages for a session while maintaining order. Maximum 100 messages
   * per batch.
   */
  batch(
    appId: string,
    userId: string,
    sessionId: string,
    body: MessageBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageBatchResponse> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/messages/batch`, {
      body,
      ...options,
    });
  }

  /**
   * Get a Message by ID
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

export type MessageBatchResponse = Array<Message>;

export interface MessageCreateParams {
  content: string;

  is_user: boolean;

  metadata?: Record<string, unknown>;
}

export interface MessageUpdateParams {
  metadata: Record<string, unknown>;
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

export interface MessageBatchParams {
  messages: Array<MessageBatchParams.Message>;
}

export namespace MessageBatchParams {
  export interface Message {
    content: string;

    is_user: boolean;

    metadata?: Record<string, unknown>;
  }
}

Messages.MessagesPage = MessagesPage;

export declare namespace Messages {
  export {
    type Message as Message,
    type PageMessage as PageMessage,
    type MessageBatchResponse as MessageBatchResponse,
    MessagesPage as MessagesPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageBatchParams as MessageBatchParams,
  };
}

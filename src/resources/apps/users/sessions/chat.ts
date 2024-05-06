// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import * as ChatAPI from 'honcho/resources/apps/users/sessions/chat';

export class Chat extends APIResource {
  /**
   * Get Chat Stream
   */
  stream(
    appId: string,
    userId: string,
    sessionId: string,
    query: ChatStreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.get(`/apps/${appId}/users/${userId}/sessions/${sessionId}/chat/stream`, {
      query,
      ...options,
    });
  }
}

export type ChatStreamResponse = unknown;

export interface ChatStreamParams {
  query: string;
}

export namespace Chat {
  export import ChatStreamResponse = ChatAPI.ChatStreamResponse;
  export import ChatStreamParams = ChatAPI.ChatStreamParams;
}

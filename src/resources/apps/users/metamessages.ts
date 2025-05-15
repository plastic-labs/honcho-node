// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { Page, type PageParams } from '../../../pagination';

export class Metamessages extends APIResource {
  /**
   * Create a new metamessage associated with a user. Optionally link to a session
   * and message by providing those IDs in the request body.
   */
  create(
    appId: string,
    userId: string,
    body: MetamessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Metamessage> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/metamessages`, { body, ...options });
  }

  /**
   * Update a metamessage's metadata, type, or relationships
   */
  update(
    appId: string,
    userId: string,
    metamessageId: string,
    body: MetamessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Metamessage> {
    return this._client.put(`/v1/apps/${appId}/users/${userId}/metamessages/${metamessageId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get metamessages with flexible filtering.
   *
   * - Filter by user only: No additional parameters needed
   * - Filter by session: Provide session_id
   * - Filter by message: Provide message_id (and session_id)
   * - Filter by type: Provide label
   * - Filter by metadata: Provide filter object
   */
  list(
    appId: string,
    userId: string,
    params?: MetamessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage>;
  list(
    appId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage>;
  list(
    appId: string,
    userId: string,
    params: MetamessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage> {
    if (isRequestOptions(params)) {
      return this.list(appId, userId, {}, params);
    }
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/apps/${appId}/users/${userId}/metamessages/list`, MetamessagesPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get a specific Metamessage by ID
   */
  get(
    appId: string,
    userId: string,
    metamessageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Metamessage> {
    return this._client.get(`/v1/apps/${appId}/users/${userId}/metamessages/${metamessageId}`, options);
  }
}

export class MetamessagesPage extends Page<Metamessage> {}

export interface Metamessage {
  id: string;

  app_id: string;

  content: string;

  created_at: string;

  label: string;

  message_id: string | null;

  metamessage_type: string;

  session_id: string | null;

  user_id: string;

  metadata?: Record<string, unknown>;
}

export interface PageMetamessage {
  items: Array<Metamessage>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface MetamessageCreateParams {
  content: string;

  metamessage_type: string;

  message_id?: string | null;

  metadata?: Record<string, unknown>;

  session_id?: string | null;
}

export interface MetamessageUpdateParams {
  message_id?: string | null;

  metadata?: Record<string, unknown> | null;

  metamessage_type?: string | null;

  session_id?: string | null;
}

export interface MetamessageListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;

  /**
   * Body param:
   */
  message_id?: string | null;

  /**
   * Body param:
   */
  metamessage_type?: string | null;

  /**
   * Body param:
   */
  session_id?: string | null;
}

Metamessages.MetamessagesPage = MetamessagesPage;

export declare namespace Metamessages {
  export {
    type Metamessage as Metamessage,
    type PageMetamessage as PageMetamessage,
    MetamessagesPage as MetamessagesPage,
    type MetamessageCreateParams as MetamessageCreateParams,
    type MetamessageUpdateParams as MetamessageUpdateParams,
    type MetamessageListParams as MetamessageListParams,
  };
}

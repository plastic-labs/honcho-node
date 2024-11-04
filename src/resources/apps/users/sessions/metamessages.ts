// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { Page, type PageParams } from '../../../../pagination';

export class Metamessages extends APIResource {
  /**
   * Adds a message to a session
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (int): The ID of the Session to add the message to metamessage
   * (schemas.MeteamessageCreate): The metamessage creation object
   *
   * Returns: schemas.Metamessage: The Metamessage object of the added metamessage
   *
   * Raises: HTTPException: If the session is not found
   */
  create(
    appId: string,
    userId: string,
    sessionId: string,
    body: MetamessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Metamessage> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages`, {
      body,
      ...options,
    });
  }

  /**
   * Update's the metadata of a metamessage
   */
  update(
    appId: string,
    userId: string,
    sessionId: string,
    metamessageId: string,
    body: MetamessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Metamessage> {
    return this._client.put(
      `/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages/${metamessageId}`,
      { body, ...options },
    );
  }

  /**
   * Get all messages for a session
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (int): The ID of the Session to retrieve reverse (bool): Whether to
   * reverse the order of the metamessages
   *
   * Returns: list[schemas.Message]: List of Message objects
   *
   * Raises: HTTPException: If the session is not found
   */
  list(
    appId: string,
    userId: string,
    sessionId: string,
    params: MetamessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(
      `/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages/list`,
      MetamessagesPage,
      { query: { page, reverse, size }, body, method: 'post', ...options },
    );
  }

  /**
   * Get a specific Metamessage by ID
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * session_id (int): The ID of the Session to retrieve
   *
   * Returns: schemas.Session: The Session object of the requested Session
   *
   * Raises: HTTPException: If the session is not found
   */
  get(
    appId: string,
    userId: string,
    sessionId: string,
    metamessageId: string,
    query: MetamessageGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Metamessage> {
    return this._client.get(
      `/v1/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages/${metamessageId}`,
      { query, ...options },
    );
  }
}

export class MetamessagesPage extends Page<Metamessage> {}

export interface Metamessage {
  id: string;

  content: string;

  created_at: string;

  message_id: string;

  metadata: Record<string, unknown>;

  metamessage_type: string;
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

  message_id: string;

  metamessage_type: string;

  metadata?: Record<string, unknown> | null;
}

export interface MetamessageUpdateParams {
  message_id: string;

  metadata?: Record<string, unknown> | null;

  metamessage_type?: string | null;
}

export interface MetamessageListParams extends PageParams {
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
  message_id?: string | null;

  /**
   * Body param:
   */
  metamessage_type?: string | null;
}

export interface MetamessageGetParams {
  message_id: string;
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
    type MetamessageGetParams as MetamessageGetParams,
  };
}

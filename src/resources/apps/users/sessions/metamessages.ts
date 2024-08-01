// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as MetamessagesAPI from './metamessages';
import { Page, type PageParams } from '../../../../pagination';

export class Metamessages extends APIResource {
  /**
   * Adds a metamessage to a session
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user session_id (int): The ID of the Session to add the metamessage to
   * metamessage (schemas.MetamessageCreate): The Metamessage object to add
   * containing the metamessage content and type
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
    return this._client.post(`/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages`, {
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
      `/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages/${metamessageId}`,
      { body, ...options },
    );
  }

  /**
   * Get all messages for a session
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user session_id (int): The ID of the Session to retrieve reverse (bool): Whether
   * to reverse the order of the metamessages
   *
   * Returns: list[schemas.Message]: List of Message objects
   *
   * Raises: HTTPException: If the session is not found
   */
  list(
    appId: string,
    userId: string,
    sessionId: string,
    query?: MetamessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage>;
  list(
    appId: string,
    userId: string,
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage>;
  list(
    appId: string,
    userId: string,
    sessionId: string,
    query: MetamessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, Metamessage> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, sessionId, {}, query);
    }
    return this._client.getAPIList(
      `/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages`,
      MetamessagesPage,
      { query, ...options },
    );
  }

  /**
   * Get a specific Metamessage by ID
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user session_id (int): The ID of the Session to retrieve
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
      `/apps/${appId}/users/${userId}/sessions/${sessionId}/metamessages/${metamessageId}`,
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
  filter?: string | null;

  message_id?: string | null;

  metamessage_type?: string | null;

  reverse?: boolean | null;
}

export interface MetamessageGetParams {
  message_id: string;
}

export namespace Metamessages {
  export import Metamessage = MetamessagesAPI.Metamessage;
  export import PageMetamessage = MetamessagesAPI.PageMetamessage;
  export import MetamessagesPage = MetamessagesAPI.MetamessagesPage;
  export import MetamessageCreateParams = MetamessagesAPI.MetamessageCreateParams;
  export import MetamessageUpdateParams = MetamessagesAPI.MetamessageUpdateParams;
  export import MetamessageListParams = MetamessagesAPI.MetamessageListParams;
  export import MetamessageGetParams = MetamessagesAPI.MetamessageGetParams;
}

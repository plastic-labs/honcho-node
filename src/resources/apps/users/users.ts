// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MetamessagesAPI from './metamessages';
import {
  Metamessage,
  MetamessageCreateParams,
  MetamessageListParams,
  MetamessageUpdateParams,
  Metamessages,
  MetamessagesPage,
  PageMetamessage,
} from './metamessages';
import * as CollectionsAPI from './collections/collections';
import {
  Collection,
  CollectionCreateParams,
  CollectionDeleteResponse,
  CollectionGetParams,
  CollectionListParams,
  CollectionUpdateParams,
  Collections,
  CollectionsPage,
  PageCollection,
} from './collections/collections';
import * as SessionsAPI from './sessions/sessions';
import {
  DialecticResponse,
  PageSession,
  Session,
  SessionChatParams,
  SessionCloneParams,
  SessionCreateParams,
  SessionDeleteResponse,
  SessionGetParams,
  SessionListParams,
  SessionUpdateParams,
  Sessions,
  SessionsPage,
} from './sessions/sessions';
import { Page, type PageParams } from '../../../pagination';

export class Users extends APIResource {
  metamessages: MetamessagesAPI.Metamessages = new MetamessagesAPI.Metamessages(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);

  /**
   * Create a new User
   */
  create(appId: string, body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post(`/v1/apps/${appId}/users`, { body, ...options });
  }

  /**
   * Update a User's name and/or metadata
   */
  update(
    appId: string,
    userId: string,
    body: UserUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<User> {
    return this._client.put(`/v1/apps/${appId}/users/${userId}`, { body, ...options });
  }

  /**
   * Get All Users for an App
   */
  list(
    appId: string,
    params: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersPage, User> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/apps/${appId}/users/list`, UsersPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get a User by ID
   *
   * If user_id is provided as a query parameter, it uses that (must match JWT
   * app_id). Otherwise, it uses the user_id from the JWT token.
   */
  get(appId: string, query?: UserGetParams, options?: Core.RequestOptions): Core.APIPromise<User>;
  get(appId: string, options?: Core.RequestOptions): Core.APIPromise<User>;
  get(
    appId: string,
    query: UserGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<User> {
    if (isRequestOptions(query)) {
      return this.get(appId, {}, query);
    }
    return this._client.get(`/v1/apps/${appId}/users`, { query, ...options });
  }

  /**
   * Get a User by name
   */
  getByName(appId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/apps/${appId}/users/name/${name}`, options);
  }

  /**
   * Get a User or create a new one by the input name
   */
  getOrCreate(appId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/apps/${appId}/users/get_or_create/${name}`, options);
  }
}

export class UsersPage extends Page<User> {}

export interface PageUser {
  items: Array<User>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface User {
  id: string;

  app_id: string;

  created_at: string;

  metadata: Record<string, unknown>;

  name: string;
}

export interface UserCreateParams {
  name: string;

  metadata?: Record<string, unknown>;
}

export interface UserUpdateParams {
  metadata?: Record<string, unknown> | null;

  name?: string | null;
}

export interface UserListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

export interface UserGetParams {
  /**
   * User ID to retrieve. If not provided, users JWT token
   */
  user_id?: string | null;
}

Users.UsersPage = UsersPage;
Users.Metamessages = Metamessages;
Users.MetamessagesPage = MetamessagesPage;
Users.Sessions = Sessions;
Users.SessionsPage = SessionsPage;
Users.Collections = Collections;
Users.CollectionsPage = CollectionsPage;

export declare namespace Users {
  export {
    type PageUser as PageUser,
    type User as User,
    UsersPage as UsersPage,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetParams as UserGetParams,
  };

  export {
    Metamessages as Metamessages,
    type Metamessage as Metamessage,
    type PageMetamessage as PageMetamessage,
    MetamessagesPage as MetamessagesPage,
    type MetamessageCreateParams as MetamessageCreateParams,
    type MetamessageUpdateParams as MetamessageUpdateParams,
    type MetamessageListParams as MetamessageListParams,
  };

  export {
    Sessions as Sessions,
    type DialecticResponse as DialecticResponse,
    type PageSession as PageSession,
    type Session as Session,
    type SessionDeleteResponse as SessionDeleteResponse,
    SessionsPage as SessionsPage,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionChatParams as SessionChatParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionGetParams as SessionGetParams,
  };

  export {
    Collections as Collections,
    type Collection as Collection,
    type PageCollection as PageCollection,
    type CollectionDeleteResponse as CollectionDeleteResponse,
    CollectionsPage as CollectionsPage,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
    type CollectionListParams as CollectionListParams,
    type CollectionGetParams as CollectionGetParams,
  };
}

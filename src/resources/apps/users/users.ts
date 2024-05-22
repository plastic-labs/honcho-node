// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as UsersAPI from './users';
import * as CollectionsAPI from './collections/collections';
import * as SessionsAPI from './sessions/sessions';
import { Page, type PageParams } from '../../../pagination';

export class Users extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);

  /**
   * Create a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user (schemas.UserCreate): The User object containing any metadata
   *
   * Returns: schemas.User: Created User object
   */
  create(appId: string, body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post(`/apps/${appId}/users`, { body, ...options });
  }

  /**
   * Update a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user user (schemas.UserCreate): The User object containing any metadata
   *
   * Returns: schemas.User: Updated User object
   */
  update(
    appId: string,
    userId: string,
    body: UserUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<User> {
    return this._client.put(`/apps/${appId}/users/${userId}`, { body, ...options });
  }

  /**
   * Get All Users for an App
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho
   *
   * Returns: list[schemas.User]: List of User objects
   */
  list(
    appId: string,
    query?: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersPage, User>;
  list(appId: string, options?: Core.RequestOptions): Core.PagePromise<UsersPage, User>;
  list(
    appId: string,
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersPage, User> {
    if (isRequestOptions(query)) {
      return this.list(appId, {}, query);
    }
    return this._client.getAPIList(`/apps/${appId}/users`, UsersPage, { query, ...options });
  }

  /**
   * Get a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user
   *
   * Returns: schemas.User: User object
   */
  get(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/apps/${appId}/users/${userId}`, options);
  }

  /**
   * Get a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user
   *
   * Returns: schemas.User: User object
   */
  getByName(appId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/apps/${appId}/users/name/${name}`, options);
  }

  /**
   * Get or Create a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user
   *
   * Returns: schemas.User: User object
   */
  getOrCreate(appId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/apps/${appId}/users/get_or_create/${name}`, options);
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

  metadata?: Record<string, unknown> | null;
}

export interface UserUpdateParams {
  metadata?: Record<string, unknown> | null;

  name?: string | null;
}

export interface UserListParams extends PageParams {
  filter?: string | null;

  reverse?: boolean;
}

export namespace Users {
  export import PageUser = UsersAPI.PageUser;
  export import User = UsersAPI.User;
  export import UsersPage = UsersAPI.UsersPage;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import Sessions = SessionsAPI.Sessions;
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
  export import Collections = CollectionsAPI.Collections;
  export import Collection = CollectionsAPI.Collection;
  export import PageCollection = CollectionsAPI.PageCollection;
  export import CollectionDeleteResponse = CollectionsAPI.CollectionDeleteResponse;
  export import CollectionQueryResponse = CollectionsAPI.CollectionQueryResponse;
  export import CollectionsPage = CollectionsAPI.CollectionsPage;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionQueryParams = CollectionsAPI.CollectionQueryParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as UsersAPI from 'honcho/resources/apps/users/users';
import * as NameAPI from 'honcho/resources/apps/users/name';
import * as CollectionsAPI from 'honcho/resources/apps/users/collections/collections';
import * as SessionsAPI from 'honcho/resources/apps/users/sessions/sessions';

export class Users extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  name: NameAPI.Name = new NameAPI.Name(this._client);

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
   * Get a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user
   *
   * Returns: schemas.User: User object
   */
  retrieve(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/apps/${appId}/users/${userId}`, options);
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
  list(appId: string, query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<PageUser>;
  list(appId: string, options?: Core.RequestOptions): Core.APIPromise<PageUser>;
  list(
    appId: string,
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageUser> {
    if (isRequestOptions(query)) {
      return this.list(appId, {}, query);
    }
    return this._client.get(`/apps/${appId}/users`, { query, ...options });
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

export interface PageUser {
  items: Array<User>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export interface User {
  id: string;

  app_id: string;

  created_at: string;

  metadata: unknown;

  name: string;
}

export interface UserCreateParams {
  name: string;

  metadata?: unknown | null;
}

export interface UserUpdateParams {
  metadata?: unknown | null;

  name?: string | null;
}

export interface UserListParams {
  filter?: string | null;

  /**
   * Page number
   */
  page?: number;

  reverse?: boolean;

  /**
   * Page size
   */
  size?: number;
}

export namespace Users {
  export import PageUser = UsersAPI.PageUser;
  export import User = UsersAPI.User;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import Sessions = SessionsAPI.Sessions;
  export import AgentChat = SessionsAPI.AgentChat;
  export import PageSession = SessionsAPI.PageSession;
  export import Session = SessionsAPI.Session;
  export import SessionDeleteResponse = SessionsAPI.SessionDeleteResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import Collections = CollectionsAPI.Collections;
  export import Collection = CollectionsAPI.Collection;
  export import PageCollection = CollectionsAPI.PageCollection;
  export import CollectionDeleteResponse = CollectionsAPI.CollectionDeleteResponse;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import Name = NameAPI.Name;
}

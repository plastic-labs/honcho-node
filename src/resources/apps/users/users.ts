// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MetamessagesAPI from './metamessages';
import { MetamessageListParams, Metamessages } from './metamessages';
import * as CollectionsAPI from './collections/collections';
import {
  Collection,
  CollectionCreateParams,
  CollectionDeleteResponse,
  CollectionListParams,
  CollectionUpdateParams,
  Collections,
  CollectionsPage,
  PageCollection,
} from './collections/collections';
import * as SessionsAPI from './sessions/sessions';
import {
  AgentChat,
  PageSession,
  Session,
  SessionChatParams,
  SessionCloneParams,
  SessionCreateParams,
  SessionDeleteResponse,
  SessionListParams,
  SessionStreamParams,
  SessionStreamResponse,
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
   * Create a User
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user (schemas.UserCreate): The User object containing any metadata
   *
   * Returns: schemas.User: Created User object
   */
  create(appId: string, body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post(`/v1/apps/${appId}/users`, { body, ...options });
  }

  /**
   * Update a User
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * user (schemas.UserCreate): The User object containing any metadata
   *
   * Returns: schemas.User: Updated User object
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
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho
   *
   * Returns: list[schemas.User]: List of User objects
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
   * Get a User
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   *
   * Returns: schemas.User: User object
   */
  get(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/apps/${appId}/users/${userId}`, options);
  }

  /**
   * Get a User
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   *
   * Returns: schemas.User: User object
   */
  getByName(appId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/v1/apps/${appId}/users/name/${name}`, options);
  }

  /**
   * Get or Create a User
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   *
   * Returns: schemas.User: User object
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
   * Query param:
   */
  reverse?: boolean;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

Users.UsersPage = UsersPage;
Users.Metamessages = Metamessages;
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
  };

  export { Metamessages as Metamessages, type MetamessageListParams as MetamessageListParams };

  export {
    Sessions as Sessions,
    type AgentChat as AgentChat,
    type PageSession as PageSession,
    type Session as Session,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionStreamResponse as SessionStreamResponse,
    SessionsPage as SessionsPage,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionChatParams as SessionChatParams,
    type SessionCloneParams as SessionCloneParams,
    type SessionStreamParams as SessionStreamParams,
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
  };
}

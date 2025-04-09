// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users/users';
import {
  PageUser,
  User,
  UserCreateParams,
  UserGetParams,
  UserListParams,
  UserUpdateParams,
  Users,
  UsersPage,
} from './users/users';
import { Page, type PageParams } from '../../pagination';

export class Apps extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create a new App
   */
  create(body: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.post('/v1/apps', { body, ...options });
  }

  /**
   * Update an App
   */
  update(appId: string, body: AppUpdateParams, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.put(`/v1/apps/${appId}`, { body, ...options });
  }

  /**
   * Get all Apps
   */
  list(params: AppListParams, options?: Core.RequestOptions): Core.PagePromise<AppsPage, App> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList('/v1/apps/list', AppsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get an App by ID.
   *
   * If app_id is provided as a query parameter, it uses that (must match JWT
   * app_id). Otherwise, it uses the app_id from the JWT token.
   */
  get(query?: AppGetParams, options?: Core.RequestOptions): Core.APIPromise<App>;
  get(options?: Core.RequestOptions): Core.APIPromise<App>;
  get(query: AppGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<App> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return this._client.get('/v1/apps', { query, ...options });
  }

  /**
   * Get an App by Name
   */
  getByName(name: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/v1/apps/name/${name}`, options);
  }

  /**
   * Get or Create an App
   */
  getOrCreate(name: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/v1/apps/get_or_create/${name}`, options);
  }
}

export class AppsPage extends Page<App> {}

export interface App {
  id: string;

  created_at: string;

  metadata: Record<string, unknown>;

  name: string;
}

export interface PageApp {
  items: Array<App>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface AppCreateParams {
  name: string;

  metadata?: Record<string, unknown>;
}

export interface AppUpdateParams {
  metadata?: Record<string, unknown> | null;

  name?: string | null;
}

export interface AppListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

export interface AppGetParams {
  /**
   * App ID to retrieve. If not provided, uses JWT token
   */
  app_id?: string | null;
}

Apps.AppsPage = AppsPage;
Apps.Users = Users;
Apps.UsersPage = UsersPage;

export declare namespace Apps {
  export {
    type App as App,
    type PageApp as PageApp,
    AppsPage as AppsPage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppGetParams as AppGetParams,
  };

  export {
    Users as Users,
    type PageUser as PageUser,
    type User as User,
    UsersPage as UsersPage,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetParams as UserGetParams,
  };
}

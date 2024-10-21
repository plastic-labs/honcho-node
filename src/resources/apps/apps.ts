// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AppsAPI from './apps';
import * as UsersAPI from './users/users';

export class Apps extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create an App
   *
   * Args: app (schemas.AppCreate): The App object containing any metadata
   *
   * Returns: schemas.App: Created App object
   */
  create(body: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.post('/v1/apps', { body, ...options });
  }

  /**
   * Update an App
   *
   * Args: app_id (str): The ID of the app to update app (schemas.AppUpdate): The App
   * object containing any new metadata
   *
   * Returns: schemas.App: The App object of the updated App
   */
  update(appId: string, body: AppUpdateParams, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.put(`/v1/apps/${appId}`, { body, ...options });
  }

  /**
   * Get an App by ID
   *
   * Args: app_id (str): The ID of the app
   *
   * Returns: schemas.App: App object
   */
  get(appId: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/v1/apps/${appId}`, options);
  }

  /**
   * Get an App by Name
   *
   * Args: app_name (str): The name of the app
   *
   * Returns: schemas.App: App object
   */
  getByName(name: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/v1/apps/name/${name}`, options);
  }

  /**
   * Get or Create an App
   *
   * Args: app_name (str): The name of the app
   *
   * Returns: schemas.App: App object
   */
  getOrCreate(name: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/v1/apps/get_or_create/${name}`, options);
  }
}

export interface App {
  id: string;

  created_at: string;

  metadata: Record<string, unknown>;

  name: string;
}

export interface AppCreateParams {
  name: string;

  metadata?: Record<string, unknown>;
}

export interface AppUpdateParams {
  metadata?: Record<string, unknown> | null;

  name?: string | null;
}

export namespace Apps {
  export import App = AppsAPI.App;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import Users = UsersAPI.Users;
  export import PageUser = UsersAPI.PageUser;
  export import User = UsersAPI.User;
  export import UsersPage = UsersAPI.UsersPage;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
}

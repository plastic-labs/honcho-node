// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import * as AppsAPI from 'honcho/resources/apps/apps';
import * as NameAPI from 'honcho/resources/apps/name';
import * as UsersAPI from 'honcho/resources/apps/users/users';

export class Apps extends APIResource {
  name: NameAPI.Name = new NameAPI.Name(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create an App
   *
   * Args: app (schemas.AppCreate): The App object containing any metadata
   *
   * Returns: schemas.App: Created App object
   */
  create(body: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.post('/apps', { body, ...options });
  }

  /**
   * Get an App by ID
   *
   * Args: app_id (uuid.UUID): The ID of the app
   *
   * Returns: schemas.App: App object
   */
  retrieve(appId: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/apps/${appId}`, options);
  }

  /**
   * Update an App
   *
   * Args: app_id (uuid.UUID): The ID of the app to update app (schemas.AppUpdate):
   * The App object containing any new metadata
   *
   * Returns: schemas.App: The App object of the updated App
   */
  update(appId: string, body: AppUpdateParams, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.put(`/apps/${appId}`, { body, ...options });
  }

  /**
   * Get or Create an App
   *
   * Args: app_name (str): The name of the app
   *
   * Returns: schemas.App: App object
   */
  getOrCreate(name: string, options?: Core.RequestOptions): Core.APIPromise<App> {
    return this._client.get(`/apps/get_or_create/${name}`, options);
  }
}

export interface App {
  id: string;

  created_at: string;

  metadata: unknown;

  name: string;
}

export interface AppCreateParams {
  name: string;

  metadata?: unknown | null;
}

export interface AppUpdateParams {
  metadata?: unknown | null;

  name?: string | null;
}

export namespace Apps {
  export import App = AppsAPI.App;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import Name = NameAPI.Name;
  export import Users = UsersAPI.Users;
  export import PageUser = UsersAPI.PageUser;
  export import User = UsersAPI.User;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
}

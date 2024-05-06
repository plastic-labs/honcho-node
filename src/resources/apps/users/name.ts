// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import * as UsersAPI from 'honcho/resources/apps/users/users';

export class Name extends APIResource {
  /**
   * Get a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user
   *
   * Returns: schemas.User: User object
   */
  retrieve(appId: string, name: string, options?: Core.RequestOptions): Core.APIPromise<UsersAPI.User> {
    return this._client.get(`/apps/${appId}/users/name/${name}`, options);
  }
}

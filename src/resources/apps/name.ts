// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import * as AppsAPI from 'honcho/resources/apps/apps';

export class Name extends APIResource {
  /**
   * Get an App by Name
   *
   * Args: app_name (str): The name of the app
   *
   * Returns: schemas.App: App object
   */
  retrieve(name: string, options?: Core.RequestOptions): Core.APIPromise<AppsAPI.App> {
    return this._client.get(`/apps/name/${name}`, options);
  }
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import * as CollectionsAPI from 'honcho/resources/apps/users/collections/collections';

export class Name extends APIResource {
  /**
   * Get Collection By Name
   */
  retrieve(
    appId: string,
    userId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionsAPI.Collection> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/name/${name}`, options);
  }
}

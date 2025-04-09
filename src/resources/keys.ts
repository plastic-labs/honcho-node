// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Keys extends APIResource {
  /**
   * Create a new Key
   */
  create(params?: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  create(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  create(
    params: KeyCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { app_id, collection_id, expires_at, session_id, user_id } = params;
    return this._client.post('/v1/keys', {
      query: { app_id, collection_id, expires_at, session_id, user_id },
      ...options,
    });
  }
}

export type KeyCreateResponse = unknown;

export interface KeyCreateParams {
  /**
   * ID of the app to scope the key to
   */
  app_id?: string | null;

  /**
   * ID of the collection to scope the key to
   */
  collection_id?: string | null;

  expires_at?: string | null;

  /**
   * ID of the session to scope the key to
   */
  session_id?: string | null;

  /**
   * ID of the user to scope the key to
   */
  user_id?: string | null;
}

export declare namespace Keys {
  export { type KeyCreateResponse as KeyCreateResponse, type KeyCreateParams as KeyCreateParams };
}

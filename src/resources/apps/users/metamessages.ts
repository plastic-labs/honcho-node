// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SessionsMetamessagesAPI from './sessions/metamessages';
import { MetamessagesPage } from './sessions/metamessages';
import { type PageParams } from '../../../pagination';

export class Metamessages extends APIResource {
  /**
   * Paginate through the user metamessages for a user
   */
  list(
    appId: string,
    userId: string,
    params: MetamessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, SessionsMetamessagesAPI.Metamessage> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/apps/${appId}/users/${userId}/metamessages/list`, MetamessagesPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }
}

export interface MetamessageListParams extends PageParams {
  /**
   * Query param:
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;

  /**
   * Body param:
   */
  metamessage_type?: string | null;
}

export declare namespace Metamessages {
  export { type MetamessageListParams as MetamessageListParams };
}

export { MetamessagesPage };

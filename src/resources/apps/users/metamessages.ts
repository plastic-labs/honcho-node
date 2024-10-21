// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MetamessagesAPI from './metamessages';
import * as SessionsMetamessagesAPI from './sessions/metamessages';
import { MetamessagesPage } from './sessions/metamessages';
import { type PageParams } from '../../../pagination';

export class Metamessages extends APIResource {
  /**
   * Paginate through the user metamessages for a user
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   * reverse (bool): Whether to reverse the order of the metamessages
   *
   * Returns: list[schemas.Message]: List of Message objects
   *
   * Raises: HTTPException: If the session is not found
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

export namespace Metamessages {
  export import MetamessageListParams = MetamessagesAPI.MetamessageListParams;
}

export { MetamessagesPage };

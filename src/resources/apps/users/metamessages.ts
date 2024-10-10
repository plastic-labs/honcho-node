// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MetamessagesAPI from './metamessages';
import * as SessionsMetamessagesAPI from './sessions/metamessages';
import { MetamessagesPage } from './sessions/metamessages';
import { type PageParams } from '../../../pagination';

export class Metamessages extends APIResource {
  /**
   * Paginate through the user metamessages for a user
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (str): The User ID representing the user, managed by the
   * user reverse (bool): Whether to reverse the order of the metamessages
   *
   * Returns: list[schemas.Message]: List of Message objects
   *
   * Raises: HTTPException: If the session is not found
   */
  list(
    appId: string,
    userId: string,
    query?: MetamessageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, SessionsMetamessagesAPI.Metamessage>;
  list(
    appId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, SessionsMetamessagesAPI.Metamessage>;
  list(
    appId: string,
    userId: string,
    query: MetamessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MetamessagesPage, SessionsMetamessagesAPI.Metamessage> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, {}, query);
    }
    return this._client.getAPIList(`/apps/${appId}/users/${userId}/metamessages`, MetamessagesPage, {
      query,
      ...options,
    });
  }
}

export interface PageMetamessage {
  items: Array<SessionsMetamessagesAPI.Metamessage>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export interface MetamessageListParams extends PageParams {
  filter?: string | null;

  metamessage_type?: string | null;

  reverse?: boolean | null;
}

export namespace Metamessages {
  export import PageMetamessage = MetamessagesAPI.PageMetamessage;
  export import MetamessageListParams = MetamessagesAPI.MetamessageListParams;
}

export { MetamessagesPage };

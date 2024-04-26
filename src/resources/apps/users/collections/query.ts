// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import * as QueryAPI from 'honcho/resources/apps/users/collections/query';
import * as DocumentsAPI from 'honcho/resources/apps/users/collections/documents';

export class Query extends APIResource {
  /**
   * Query Documents
   */
  list(
    appId: string,
    userId: string,
    collectionId: string,
    query: QueryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryListResponse> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/${collectionId}/query`, {
      query,
      ...options,
    });
  }
}

export type QueryListResponse = Array<DocumentsAPI.Document>;

export interface QueryListParams {
  query: string;

  filter?: string | null;

  top_k?: number;
}

export namespace Query {
  export import QueryListResponse = QueryAPI.QueryListResponse;
  export import QueryListParams = QueryAPI.QueryListParams;
}

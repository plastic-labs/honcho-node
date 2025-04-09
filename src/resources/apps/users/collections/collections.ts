// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as DocumentsAPI from './documents';
import {
  Document,
  DocumentCreateParams,
  DocumentDeleteResponse,
  DocumentListParams,
  DocumentQueryParams,
  DocumentQueryResponse,
  DocumentUpdateParams,
  Documents,
  DocumentsPage,
  PageDocument,
} from './documents';
import { Page, type PageParams } from '../../../../pagination';

export class Collections extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Create a new Collection
   */
  create(
    appId: string,
    userId: string,
    body: CollectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/collections`, { body, ...options });
  }

  /**
   * Update a Collection's name or metadata
   */
  update(
    appId: string,
    userId: string,
    collectionId: string,
    body: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.put(`/v1/apps/${appId}/users/${userId}/collections/${collectionId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get All Collections for a User
   */
  list(
    appId: string,
    userId: string,
    params: CollectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionsPage, Collection> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(`/v1/apps/${appId}/users/${userId}/collections/list`, CollectionsPage, {
      query: { page, reverse, size },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Delete a Collection and its documents
   */
  delete(
    appId: string,
    userId: string,
    collectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/apps/${appId}/users/${userId}/collections/${collectionId}`, options);
  }

  /**
   * Get a specific collection for a user.
   *
   * If collection_id is provided as a query parameter, it uses that (must match JWT
   * collection_id). Otherwise, it uses the collection_id from the JWT token.
   */
  get(
    appId: string,
    userId: string,
    query?: CollectionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection>;
  get(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<Collection>;
  get(
    appId: string,
    userId: string,
    query: CollectionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    if (isRequestOptions(query)) {
      return this.get(appId, userId, {}, query);
    }
    return this._client.get(`/v1/apps/${appId}/users/${userId}/collections`, { query, ...options });
  }

  /**
   * Get a Collection by Name
   */
  getByName(
    appId: string,
    userId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/v1/apps/${appId}/users/${userId}/collections/name/${name}`, options);
  }
}

export class CollectionsPage extends Page<Collection> {}

export interface Collection {
  id: string;

  created_at: string;

  metadata: Record<string, unknown>;

  name: string;

  user_id: string;
}

export interface PageCollection {
  items: Array<Collection>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export type CollectionDeleteResponse = unknown;

export interface CollectionCreateParams {
  name: string;

  metadata?: Record<string, unknown>;
}

export interface CollectionUpdateParams {
  metadata?: Record<string, unknown> | null;

  name?: string | null;
}

export interface CollectionListParams extends PageParams {
  /**
   * Query param: Whether to reverse the order of results
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

export interface CollectionGetParams {
  /**
   * Collection ID to retrieve. If not provided, uses JWT token
   */
  collection_id?: string | null;
}

Collections.CollectionsPage = CollectionsPage;
Collections.Documents = Documents;
Collections.DocumentsPage = DocumentsPage;

export declare namespace Collections {
  export {
    type Collection as Collection,
    type PageCollection as PageCollection,
    type CollectionDeleteResponse as CollectionDeleteResponse,
    CollectionsPage as CollectionsPage,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
    type CollectionListParams as CollectionListParams,
    type CollectionGetParams as CollectionGetParams,
  };

  export {
    Documents as Documents,
    type Document as Document,
    type PageDocument as PageDocument,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentQueryResponse as DocumentQueryResponse,
    DocumentsPage as DocumentsPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentQueryParams as DocumentQueryParams,
  };
}

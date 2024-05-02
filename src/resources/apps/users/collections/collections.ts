// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as CollectionsAPI from 'honcho/resources/apps/users/collections/collections';
import * as DocumentsAPI from 'honcho/resources/apps/users/collections/documents';
import * as QueryAPI from 'honcho/resources/apps/users/collections/query';
import { Page, type PageParams } from 'honcho/pagination';

export class Collections extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);

  /**
   * Create Collection
   */
  create(
    appId: string,
    userId: string,
    body: CollectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.post(`/apps/${appId}/users/${userId}/collections`, { body, ...options });
  }

  /**
   * Update Collection
   */
  update(
    appId: string,
    userId: string,
    collectionId: string,
    body: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.put(`/apps/${appId}/users/${userId}/collections/${collectionId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get All Collections for a User
   *
   * Args: app_id (uuid.UUID): The ID of the app representing the client application
   * using honcho user_id (uuid.UUID): The User ID representing the user, managed by
   * the user
   *
   * Returns: list[schemas.Collection]: List of Collection objects
   */
  list(
    appId: string,
    userId: string,
    query?: CollectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionsPage, Collection>;
  list(
    appId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionsPage, Collection>;
  list(
    appId: string,
    userId: string,
    query: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionsPage, Collection> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, {}, query);
    }
    return this._client.getAPIList(`/apps/${appId}/users/${userId}/collections`, CollectionsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete Collection
   */
  delete(
    appId: string,
    userId: string,
    collectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/apps/${appId}/users/${userId}/collections/${collectionId}`, options);
  }

  /**
   * Get Collection By Name
   */
  get(
    appId: string,
    userId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/${name}`, options);
  }
}

export class CollectionsPage extends Page<Collection> {}

export interface Collection {
  id: string;

  created_at: string;

  metadata: Collection.Metadata;

  name: string;

  user_id: string;
}

export namespace Collection {
  export interface Metadata {}
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

  metadata?: CollectionCreateParams.Metadata | null;
}

export namespace CollectionCreateParams {
  export interface Metadata {}
}

export interface CollectionUpdateParams {
  name: string;

  metadata?: CollectionUpdateParams.Metadata | null;
}

export namespace CollectionUpdateParams {
  export interface Metadata {}
}

export interface CollectionListParams extends PageParams {
  filter?: string | null;

  reverse?: boolean | null;
}

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import PageCollection = CollectionsAPI.PageCollection;
  export import CollectionDeleteResponse = CollectionsAPI.CollectionDeleteResponse;
  export import CollectionsPage = CollectionsAPI.CollectionsPage;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import Documents = DocumentsAPI.Documents;
  export import Document = DocumentsAPI.Document;
  export import PageDocument = DocumentsAPI.PageDocument;
  export import DocumentDeleteResponse = DocumentsAPI.DocumentDeleteResponse;
  export import DocumentsPage = DocumentsAPI.DocumentsPage;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DocumentUpdateParams = DocumentsAPI.DocumentUpdateParams;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
  export import Query = QueryAPI.Query;
  export import QueryQueryResponse = QueryAPI.QueryQueryResponse;
  export import QueryQueryParams = QueryAPI.QueryQueryParams;
}

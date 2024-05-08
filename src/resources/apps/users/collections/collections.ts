// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as CollectionsAPI from 'honcho/resources/apps/users/collections/collections';
import * as DocumentsAPI from 'honcho/resources/apps/users/collections/documents';

export class Collections extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

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
  ): Core.APIPromise<PageCollection>;
  list(appId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<PageCollection>;
  list(
    appId: string,
    userId: string,
    query: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageCollection> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, {}, query);
    }
    return this._client.get(`/apps/${appId}/users/${userId}/collections`, { query, ...options });
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
   * Get Collection By Id
   */
  get(
    appId: string,
    userId: string,
    collectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/${collectionId}`, options);
  }

  /**
   * Get Collection By Name
   */
  getByName(
    appId: string,
    userId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/name/${name}`, options);
  }

  /**
   * Query Documents
   */
  query(
    appId: string,
    userId: string,
    collectionId: string,
    query: CollectionQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionQueryResponse> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/${collectionId}/query`, {
      query,
      ...options,
    });
  }
}

export interface Collection {
  id: string;

  created_at: string;

  metadata: unknown;

  name: string;

  user_id: string;
}

export interface PageCollection {
  items: Array<Collection>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export type CollectionDeleteResponse = unknown;

export type CollectionQueryResponse = Array<DocumentsAPI.Document>;

export interface CollectionCreateParams {
  name: string;

  metadata?: unknown | null;
}

export interface CollectionUpdateParams {
  name: string;

  metadata?: unknown | null;
}

export interface CollectionListParams {
  filter?: string | null;

  /**
   * Page number
   */
  page?: number;

  reverse?: boolean | null;

  /**
   * Page size
   */
  size?: number;
}

export interface CollectionQueryParams {
  query: string;

  filter?: string | null;

  top_k?: number;
}

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import PageCollection = CollectionsAPI.PageCollection;
  export import CollectionDeleteResponse = CollectionsAPI.CollectionDeleteResponse;
  export import CollectionQueryResponse = CollectionsAPI.CollectionQueryResponse;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionQueryParams = CollectionsAPI.CollectionQueryParams;
  export import Documents = DocumentsAPI.Documents;
  export import Document = DocumentsAPI.Document;
  export import PageDocument = DocumentsAPI.PageDocument;
  export import DocumentDeleteResponse = DocumentsAPI.DocumentDeleteResponse;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DocumentUpdateParams = DocumentsAPI.DocumentUpdateParams;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
}

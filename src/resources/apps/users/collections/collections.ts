// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CollectionsAPI from './collections';
import * as DocumentsAPI from './documents';
import { Page, type PageParams } from '../../../../pagination';

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
    return this._client.post(`/v1/apps/${appId}/users/${userId}/collections`, { body, ...options });
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
    return this._client.put(`/v1/apps/${appId}/users/${userId}/collections/${collectionId}`, {
      body,
      ...options,
    });
  }

  /**
   * Get All Collections for a User
   *
   * Args: app_id (str): The ID of the app representing the client application using
   * honcho user_id (str): The User ID representing the user, managed by the user
   *
   * Returns: list[schemas.Collection]: List of Collection objects
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
   * Delete Collection
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
   * Get Collection By Id
   */
  get(
    appId: string,
    userId: string,
    collectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/v1/apps/${appId}/users/${userId}/collections/${collectionId}`, options);
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

  metadata?: Record<string, unknown> | null;
}

export interface CollectionUpdateParams {
  metadata?: Record<string, unknown> | null;

  name?: string | null;
}

export interface CollectionListParams extends PageParams {
  /**
   * Query param:
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
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
  export import DocumentQueryResponse = DocumentsAPI.DocumentQueryResponse;
  export import DocumentsPage = DocumentsAPI.DocumentsPage;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DocumentUpdateParams = DocumentsAPI.DocumentUpdateParams;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
  export import DocumentQueryParams = DocumentsAPI.DocumentQueryParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as DocumentsAPI from 'honcho/resources/apps/users/collections/documents';

export class Documents extends APIResource {
  /**
   * Create Document
   */
  create(
    appId: string,
    userId: string,
    collectionId: string,
    body: DocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.post(`/apps/${appId}/users/${userId}/collections/${collectionId}/documents`, {
      body,
      ...options,
    });
  }

  /**
   * Get Document
   */
  retrieve(
    appId: string,
    userId: string,
    collectionId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.get(
      `/apps/${appId}/users/${userId}/collections/${collectionId}/documents/${documentId}`,
      options,
    );
  }

  /**
   * Update Document
   */
  update(
    appId: string,
    userId: string,
    collectionId: string,
    documentId: string,
    body: DocumentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.put(
      `/apps/${appId}/users/${userId}/collections/${collectionId}/documents/${documentId}`,
      { body, ...options },
    );
  }

  /**
   * Get Documents
   */
  list(
    appId: string,
    userId: string,
    collectionId: string,
    query?: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageDocument>;
  list(
    appId: string,
    userId: string,
    collectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageDocument>;
  list(
    appId: string,
    userId: string,
    collectionId: string,
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageDocument> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, collectionId, {}, query);
    }
    return this._client.get(`/apps/${appId}/users/${userId}/collections/${collectionId}/documents`, {
      query,
      ...options,
    });
  }

  /**
   * Delete Document
   */
  delete(
    appId: string,
    userId: string,
    collectionId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/apps/${appId}/users/${userId}/collections/${collectionId}/documents/${documentId}`,
      options,
    );
  }
}

export interface Document {
  id: string;

  collection_id: string;

  content: string;

  created_at: string;

  metadata: unknown;
}

export interface PageDocument {
  items: Array<Document>;

  page: number | null;

  size: number | null;

  total: number | null;

  pages?: number | null;
}

export type DocumentDeleteResponse = unknown;

export interface DocumentCreateParams {
  content: string;

  metadata?: unknown | null;
}

export interface DocumentUpdateParams {
  content?: string | null;

  metadata?: unknown | null;
}

export interface DocumentListParams {
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

export namespace Documents {
  export import Document = DocumentsAPI.Document;
  export import PageDocument = DocumentsAPI.PageDocument;
  export import DocumentDeleteResponse = DocumentsAPI.DocumentDeleteResponse;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DocumentUpdateParams = DocumentsAPI.DocumentUpdateParams;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
}

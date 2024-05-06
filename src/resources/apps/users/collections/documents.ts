// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'honcho/core';
import { APIResource } from 'honcho/resource';
import { isRequestOptions } from 'honcho/core';
import * as DocumentsAPI from 'honcho/resources/apps/users/collections/documents';
import { Page, type PageParams } from 'honcho/pagination';

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
  ): Core.PagePromise<DocumentsPage, Document>;
  list(
    appId: string,
    userId: string,
    collectionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage, Document>;
  list(
    appId: string,
    userId: string,
    collectionId: string,
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage, Document> {
    if (isRequestOptions(query)) {
      return this.list(appId, userId, collectionId, {}, query);
    }
    return this._client.getAPIList(
      `/apps/${appId}/users/${userId}/collections/${collectionId}/documents`,
      DocumentsPage,
      { query, ...options },
    );
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

  /**
   * Get Document
   */
  get(
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
   * Query Documents
   */
  query(
    appId: string,
    userId: string,
    collectionId: string,
    query: DocumentQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentQueryResponse> {
    return this._client.get(`/apps/${appId}/users/${userId}/collections/${collectionId}/query`, {
      query,
      ...options,
    });
  }
}

export class DocumentsPage extends Page<Document> {}

export interface Document {
  id: string;

  collection_id: string;

  content: string;

  created_at: string;

  metadata: unknown;
}

export interface PageDocument {
  items: Array<Document>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export type DocumentDeleteResponse = unknown;

export type DocumentQueryResponse = Array<Document>;

export interface DocumentCreateParams {
  content: string;

  metadata?: unknown | null;
}

export interface DocumentUpdateParams {
  content?: string | null;

  metadata?: unknown | null;
}

export interface DocumentListParams extends PageParams {
  filter?: string | null;

  reverse?: boolean | null;
}

export interface DocumentQueryParams {
  query: string;

  filter?: string | null;

  top_k?: number;
}

export namespace Documents {
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

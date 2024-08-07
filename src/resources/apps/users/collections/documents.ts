// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as DocumentsAPI from './documents';
import { Page, type PageParams } from '../../../../pagination';

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
}

export class DocumentsPage extends Page<Document> {}

export interface Document {
  id: string;

  collection_id: string;

  content: string;

  created_at: string;

  metadata: Record<string, unknown>;
}

export interface PageDocument {
  items: Array<Document>;

  page: number;

  size: number;

  total: number;

  pages?: number;
}

export type DocumentDeleteResponse = unknown;

export interface DocumentCreateParams {
  content: string;

  metadata?: Record<string, unknown> | null;
}

export interface DocumentUpdateParams {
  content?: string | null;

  metadata?: Record<string, unknown> | null;
}

export interface DocumentListParams extends PageParams {
  filter?: string | null;

  reverse?: boolean | null;
}

export namespace Documents {
  export import Document = DocumentsAPI.Document;
  export import PageDocument = DocumentsAPI.PageDocument;
  export import DocumentDeleteResponse = DocumentsAPI.DocumentDeleteResponse;
  export import DocumentsPage = DocumentsAPI.DocumentsPage;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DocumentUpdateParams = DocumentsAPI.DocumentUpdateParams;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
}

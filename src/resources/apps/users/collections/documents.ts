// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { Page, type PageParams } from '../../../../pagination';

export class Documents extends APIResource {
  /**
   * Embed text as a vector and create a Document
   */
  create(
    appId: string,
    userId: string,
    collectionId: string,
    body: DocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.post(`/v1/apps/${appId}/users/${userId}/collections/${collectionId}/documents`, {
      body,
      ...options,
    });
  }

  /**
   * Update the content and/or the metadata of a Document
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
      `/v1/apps/${appId}/users/${userId}/collections/${collectionId}/documents/${documentId}`,
      { body, ...options },
    );
  }

  /**
   * Get all of the Documents in a Collection
   */
  list(
    appId: string,
    userId: string,
    collectionId: string,
    params: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage, Document> {
    const { page, reverse, size, ...body } = params;
    return this._client.getAPIList(
      `/v1/apps/${appId}/users/${userId}/collections/${collectionId}/documents/list`,
      DocumentsPage,
      { query: { page, reverse, size }, body, method: 'post', ...options },
    );
  }

  /**
   * Delete a Document by ID
   */
  delete(
    appId: string,
    userId: string,
    collectionId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/v1/apps/${appId}/users/${userId}/collections/${collectionId}/documents/${documentId}`,
      options,
    );
  }

  /**
   * Get a document by ID
   */
  get(
    appId: string,
    userId: string,
    collectionId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.get(
      `/v1/apps/${appId}/users/${userId}/collections/${collectionId}/documents/${documentId}`,
      options,
    );
  }

  /**
   * Cosine Similarity Search for Documents
   */
  query(
    appId: string,
    userId: string,
    collectionId: string,
    body: DocumentQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentQueryResponse> {
    return this._client.post(
      `/v1/apps/${appId}/users/${userId}/collections/${collectionId}/documents/query`,
      { body, ...options },
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

export type DocumentQueryResponse = Array<Document>;

export interface DocumentCreateParams {
  content: string;

  metadata?: Record<string, unknown> | null;
}

export interface DocumentUpdateParams {
  content?: string | null;

  metadata?: Record<string, unknown> | null;
}

export interface DocumentListParams extends PageParams {
  /**
   * Query param:
   */
  reverse?: boolean | null;

  /**
   * Body param:
   */
  filter?: Record<string, unknown> | null;
}

export interface DocumentQueryParams {
  query: string;

  filter?: Record<string, unknown> | null;

  top_k?: number;
}

Documents.DocumentsPage = DocumentsPage;

export declare namespace Documents {
  export {
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

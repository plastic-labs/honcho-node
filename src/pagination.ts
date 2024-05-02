// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageResponse<Item> {
  total: number;

  items: Array<Item>;

  page: number;

  size: number;

  pages: number;
}

export interface PageParams {
  /**
   * The page number
   */
  page?: number;

  /**
   * The number of items in a page
   */
  size?: number;
}

export class Page<Item> extends AbstractPage<Item> implements PageResponse<Item> {
  total: number;

  items: Array<Item>;

  page: number;

  size: number;

  pages: number;

  constructor(client: APIClient, response: Response, body: PageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.total = body.total || 0;
    this.items = body.items || [];
    this.page = body.page || 0;
    this.size = body.size || 0;
    this.pages = body.pages || 0;
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.page;

    if (currentPage >= this.pages) {
      return null;
    }

    return { params: { page: currentPage + 1 } };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Response {
  results: Results;
}

export interface Results {
  'opensearch:Query': OpensearchQuery;
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  artistmatches: Artistmatches;
  '@attr': Attr;
}

export interface OpensearchQuery {
  '#text': string;
  role: string;
  searchTerms: string;
  startPage: string;
}

export interface Artistmatches {
  artist: Artist[];
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

export interface Image {
  '#text': string;
  size: string;
}

export interface Attr {
  for: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://ws.audioscrobbler.com/2.0';

  constructor(private http: HttpClient) {}

  public find(req: string, options?: any) {
    return this.http.get(this.baseUrl + req, options);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface LastFmResponse {
  results: Results;
}

export interface Results {
  'opensearch:Query': OpensearchQuery;
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  artistmatches?: Artistmatches;
  albummatches?: Albummatches;
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

export interface Albummatches {
  album: Artist[];
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
    return this.http
      .get<LastFmResponse>(this.baseUrl + req, {
        ...options,
        responseType: 'json',
        params: {
          ...options.params,
          api_key: 'd4979de463b7894e5cea4d607647a294',
          format: 'json',
        },
      })
      .pipe(
        map((response: any) => {
          if (response && response.results) {
            return response as LastFmResponse;
          }
          throw new Error('Resposta inválida');
        })
      );
  }
}

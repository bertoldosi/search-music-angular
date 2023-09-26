import { Component } from '@angular/core';
import { ApiService, Artist, LastFmResponse } from './home.api.service';
import { map } from 'rxjs/operators';
import { HomeSharedService } from './home.shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  result: Artist[] | [];
  showResult: boolean;

  constructor(
    private apiService: ApiService,
    private homeSharedService: HomeSharedService
  ) {
    this.showResult = false;
    this.result = [];
  }

  search(query: string) {
    try {
      this.apiService
        .find('/', {
          params: {
            artist: query,
            method: 'artist.search',
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
        )
        .subscribe(
          (jsonData) => {
            const artists = jsonData.results.artistmatches.artist;
            this.homeSharedService.setResult(artists);
            this.result = artists;
            this.showResult = true;
          },
          (error) => {
            console.error('Erro ao buscar artista:', error);
          }
        );
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
    }
  }

  clearResult() {
    this.homeSharedService.setResult([]);
    this.showResult = false;
  }
}

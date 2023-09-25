import { Component } from '@angular/core';
import { ApiService } from './home.api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isResult: boolean = false;
  result: any = {};

  constructor(private apiService: ApiService) {}

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
        .subscribe((response) => {
          this.result = response;

          console.log(response);
        });
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
    }
  }
}

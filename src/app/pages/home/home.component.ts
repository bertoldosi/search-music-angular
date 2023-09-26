import { Component } from '@angular/core';
import { ApiService, Artist, LastFmResponse } from './home.api.service';
import { map } from 'rxjs/operators';
import { HomeSharedService } from './home.shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showResult: boolean;
  typeSearch: string;

  constructor(
    private apiService: ApiService,
    private homeSharedService: HomeSharedService
  ) {
    this.showResult = false;
    this.typeSearch = 'artist';
  }

  search(query: string) {
    const params = {
      [this.typeSearch]: query,
      method: `${this.typeSearch}.search`,
    };

    try {
      this.apiService
        .find('/', {
          params,
        })
        .subscribe(
          (jsonData) => {
            const results =
              this.typeSearch == 'artist'
                ? jsonData?.results?.artistmatches?.artist
                : jsonData?.results?.albummatches?.album;

            this.homeSharedService.setResult(results || []);
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

  handleTypeSearchChange(newTypeSearch: string) {
    console.log(newTypeSearch);
    this.typeSearch = newTypeSearch;
  }
}

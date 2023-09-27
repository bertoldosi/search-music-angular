import { Component } from '@angular/core';
import { ApiService } from './home.api.service';
import { HomeSharedService } from './home.shared.service';
import { DatePipe } from '@angular/common';
import { HomeLocalStorageService } from './home.storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showResult: boolean;
  loading: boolean;
  typeSearch: string;
  keyHistory: string;

  constructor(
    private apiService: ApiService,
    private homeSharedService: HomeSharedService,
    private homeLocalStorageService: HomeLocalStorageService,
    private datePipe: DatePipe
  ) {
    this.showResult = false;
    this.loading = false;
    this.typeSearch = 'artist';
    this.keyHistory = 'search-music-history';
  }

  persistHistory(query: string) {
    const dateNow = new Date();
    var dateFormated = this.datePipe.transform(dateNow, 'dd/MM/yyyy, h:mm a');

    const valuesLocalStorage = this.homeLocalStorageService.getItem(
      this.keyHistory
    );

    if (valuesLocalStorage) {
      const newHistory = [
        ...valuesLocalStorage,
        {
          value: query,
          date: dateFormated,
        },
      ];
      this.homeLocalStorageService.setItem(this.keyHistory, newHistory);
    } else {
      const newHistory = [
        {
          value: query,
          date: dateFormated,
        },
      ];

      this.homeLocalStorageService.setItem(this.keyHistory, newHistory);
    }
  }

  search(query: string) {
    this.loading = true;
    this.persistHistory(query);

    const params = {
      [this.typeSearch]: query,
      method: `${this.typeSearch}.search`,
    };

    try {
      this.apiService
        .find('/', {
          params,
        })
        .subscribe((reponse) => {
          const results =
            this.typeSearch == 'artist'
              ? reponse?.results?.artistmatches?.artist
              : reponse?.results?.albummatches?.album;

          this.homeSharedService.setResult(results || []);
          this.loading = false;
          this.showResult = true;
        });
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
    }
  }

  clearResult() {
    this.homeSharedService.setResult([]);
    this.showResult = false;
  }

  handleTypeSearchChange(newTypeSearch: string) {
    this.typeSearch = newTypeSearch;
  }
}

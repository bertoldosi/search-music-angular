import { Component, OnInit } from '@angular/core';
import { HomeLocalStorageService } from '../home/home.storage.service';

export interface HistoryType {
  value: string;
  date: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  keyHistory: string;
  history: HistoryType[] | [];

  constructor(private homeLocalStorageService: HomeLocalStorageService) {
    this.keyHistory = 'search-music-history';
    this.history = [];
  }
  ngOnInit(): void {
    const valuesLocalStorage = this.homeLocalStorageService.getItem(
      this.keyHistory
    );

    this.history = valuesLocalStorage;
  }
}

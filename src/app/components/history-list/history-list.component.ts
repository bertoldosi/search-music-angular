import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryType } from 'src/app/pages/history/history.component';
import { HomeLocalStorageService } from 'src/app/pages/home/home.storage.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit {
  history: HistoryType[] | [];
  keyHistory: string;

  constructor(
    private homeLocalStorageService: HomeLocalStorageService,
    private router: Router
  ) {
    this.history = [];
    this.keyHistory = 'search-music-history';
  }

  resetHistory() {
    this.homeLocalStorageService.removeItem(this.keyHistory);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const valuesLocalStorage = this.homeLocalStorageService.getItem(
      this.keyHistory
    );

    this.history = valuesLocalStorage || [];
  }
}

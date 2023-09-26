import { Component, Input } from '@angular/core';
import { HistoryType } from 'src/app/pages/history/history.component';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent {
  @Input() history: HistoryType[];

  constructor() {
    this.history = [];
  }
}

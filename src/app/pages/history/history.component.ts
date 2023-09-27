import { Component } from '@angular/core';

export interface HistoryType {
  value: string;
  date: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {}

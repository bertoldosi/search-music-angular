import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query: string;

  @Input() typeSearch: string;

  @Output() searchEvent = new EventEmitter<string>();
  @Output() typeSearchChange = new EventEmitter<string>();

  constructor() {
    this.query = '';
    this.typeSearch = 'artist';
  }

  onSearchClick() {
    this.searchEvent.emit(this.query);
  }

  onTypeSearchChange(newValue: string) {
    this.typeSearch = newValue;
    this.typeSearchChange.emit(newValue);
  }
}

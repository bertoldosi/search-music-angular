import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  query: string = '';

  @Output() typeSearchChange = new EventEmitter<string>();
  typeSearch: string = 'artist';

  onSearchClick() {
    this.searchEvent.emit(this.query);
  }

  onTypeSearchChange(newValue: string) {
    this.typeSearch = newValue;
    this.typeSearchChange.emit(newValue);
  }
}

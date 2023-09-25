import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  constructor(private router: Router) {}

  @Input() search!: Function;

  redirect() {
    if (this.search) {
      this.search();
    }
    this.router.navigate(['/']);
  }
}

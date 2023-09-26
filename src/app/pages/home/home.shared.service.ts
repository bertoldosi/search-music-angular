import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Artist } from './home.api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeSharedService {
  private resultSubject = new BehaviorSubject<Artist[]>([]);

  result$ = this.resultSubject.asObservable();

  setResult(result: Artist[]) {
    this.resultSubject.next(result);
  }
}

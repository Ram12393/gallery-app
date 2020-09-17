import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  private subject = new Subject<any>();


  sendEvent() {
    this.subject.next('login');
  }
  listenEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}

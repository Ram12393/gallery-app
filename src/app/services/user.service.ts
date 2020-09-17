import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getOurTeam() {
    return this.http.get(`${environment.path}team`);
  }

  getUser(email: string) {
    return this.http.get(`${environment.path}users?userid=${email}`);
  }
}

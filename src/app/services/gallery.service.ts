import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private http: HttpClient

  ) { }

  getImages() {
    return this.http.get(`${environment.path}images`);
  }
  getGalleryImages() {
    return this.http.get(`${environment.path}gallery`);
  }
}

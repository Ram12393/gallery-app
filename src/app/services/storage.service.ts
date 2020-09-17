import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
}

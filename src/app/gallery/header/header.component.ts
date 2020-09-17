import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  userInfo: any;
  constructor(
    private eventService: EventService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.onLoggedin();
  }

  ngOnInit(): void {
    this.getItems();
  }
  onLoggedin() {
    this.eventService.listenEvent().subscribe(res => {
      console.log(res);
      this.isLoggedIn = true;
      this.storageService.setItem('isLoggedIn', true);
      this.getItems();
    });
  }

  getItems() {
    if (this.storageService.getItem('isLoggedIn')) {
      this.isLoggedIn = true;
    }
    this.userInfo = JSON.parse(this.storageService.getItem('user_info'));
    console.log(this.userInfo);

  }
  logout() {
    this.storageService.removeItem('isLoggedIn');
    this.storageService.removeItem('user_info');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}

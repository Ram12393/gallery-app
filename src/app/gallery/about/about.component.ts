import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public ourTeam: any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getOurTeam();
  }

  getOurTeam() {
    this.userService.getOurTeam().subscribe(res => {
      this.ourTeam = res;
    });
  }
}

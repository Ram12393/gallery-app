import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginError: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private eventService: EventService,
    private storageService: StorageService) {
    if (this.storageService.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get formControl() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.login(this.loginForm.value);
  }

  login(loginFormInfo) {
    this.userService.getUser(loginFormInfo.email).subscribe((res: any[]) => {
      if (!res.length) {
        this.loginError = 'User not found';
        return;
      }
      if (res.length && loginFormInfo.password !== res[0].password) {
        this.loginError = 'Invalid credentials';
        return;
      }
      this.storageService.setItem('user_info', res[0]);
      this.router.navigate(['/']);
      this.eventService.sendEvent();
    });
  }
}

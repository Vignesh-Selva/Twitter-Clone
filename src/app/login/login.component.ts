import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoplinkService } from '../poplink.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(private router: Router, private popLinkService: PoplinkService) {}

  login() {
    if (this.email && this.password) {
      const registeredUser = this.popLinkService.registeredUser;
  
      if (registeredUser && this.email === registeredUser.email && this.password === registeredUser.password) {
        this.router.navigate(['/home']);
        console.log("Login Successfull")
      } else {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }
  }
  

  openWindow(platform: string) {
    this.popLinkService.openWindow(platform);
  }
}

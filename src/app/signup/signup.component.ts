import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoplinkService } from 'src/app/poplink.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private router: Router, private popLinkService: PoplinkService) {}

  register() {
    if (this.user.name && this.user.email && this.user.password) {
      console.log('User registered:', this.user);
      this.popLinkService.registeredUser={
        email: this.user.email,
        name: this.user.name,
        password: this.user.password
    }
    this.router.navigate(['/login']);
  }else{
    window.alert("Please enter all the required fields!")
  }
  }
  openWindow(platform: string) {
    this.popLinkService.openWindow(platform);
  }
}

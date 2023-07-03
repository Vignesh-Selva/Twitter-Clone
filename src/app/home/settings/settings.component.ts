import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoplinkService } from 'src/app/poplink.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  userName: string = 'default user';
  userHandle: string = 'default123';

  constructor(private router: Router, private modalService: PoplinkService) {}

  open() {
    this.modalService.open();
  }

  reloadPage() {
    location.reload();
  }

  logout() {
    if (window.confirm('Are you sure you want to Logout?')) {
      this.router.navigate(['/feed']);
    }
  }
}

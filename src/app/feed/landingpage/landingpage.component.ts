import { Component } from '@angular/core';
import { PoplinkService } from 'src/app/poplink.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  constructor(private popLinkService: PoplinkService) {}

  openWindow(platform: string) {
    this.popLinkService.openWindow(platform);
  }

}

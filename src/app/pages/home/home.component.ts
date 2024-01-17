import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/sevices/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private windowService: WindowService) {}

  isMobile: boolean = window.screen.width < this.windowService.MOBILE_WIDTH;
}

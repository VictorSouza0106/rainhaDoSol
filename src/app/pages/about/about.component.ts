import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/sevices/window.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private windowService: WindowService) {}

  isMobile: boolean = window.screen.width < this.windowService.MOBILE_WIDTH;

  ngOnInit(): void {}
}

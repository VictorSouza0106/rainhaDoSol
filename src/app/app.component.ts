import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { WindowService } from './sevices/window.service';
import { Observable } from 'rxjs/internal/Observable';

const MOBILE_WIDTH = 800;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private windowService: WindowService) {}

  isMobile: boolean = window.screen.width < MOBILE_WIDTH;
  isHomePage: boolean = false;
  isMenuOpen: boolean = false;

  public goToURL(url: string): void {
    this.router.navigateByUrl(url);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.screen.width < MOBILE_WIDTH)
      this.windowService.isMobile.next(true);
    else this.windowService.isMobile.next(false);
    console.log('window ->', window.screen.width);
  }

  ngOnInit(): void {
    this.windowService.isMobile.subscribe((isMobile) => {
      this.isMobile = isMobile;
      console.log('IS MOBILE ->', isMobile);
    });

    console.log(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') this.isHomePage = true;
      }
    });
  }
  public changeMenuState() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

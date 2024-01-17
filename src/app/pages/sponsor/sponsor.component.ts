import { Component, OnInit } from '@angular/core';
import { ADVType } from 'src/app/interfaces/advertising';
import { WindowService } from 'src/app/sevices/window.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss'],
})
export class SponsorComponent implements OnInit {
  ADVs: ADVType[] = [
    {
      name: 'Anuncio na Rádio (Mensal)',
      price: 800,
    },
    {
      name: 'Anuncio 24h na TV RAINHA',
      price: 150,
    },
  ];

  constructor(private windowService: WindowService) {}

  isMobile: boolean = window.screen.width < this.windowService.MOBILE_WIDTH;

  ngOnInit(): void {}
}

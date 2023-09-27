import { Component, OnInit } from '@angular/core';
import { ADVType } from 'src/app/interfaces/advertising';

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
      name: 'Primeiro serviço',
      price: 35,
    },
    {
      name: 'Anuncio 24h na TV RAINHA',
      price: 150,
    },
    {
      name: 'Segundo serviço',
      price: 150,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

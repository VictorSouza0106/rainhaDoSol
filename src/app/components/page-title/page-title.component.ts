import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  @Input() titleText: string;
  @Input() borderPosition: 'left' | 'middle' | 'right' = 'left';
  @Input() isEmptySubtitle: boolean = false;
  @Input() fontSize: string = '48px';

  constructor() {}

  ngOnInit(): void {}
}

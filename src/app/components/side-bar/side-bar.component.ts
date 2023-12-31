import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Output() onNavSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onNavSelect(URL: string) {
    this.onNavSelected.emit(URL);
  }
}

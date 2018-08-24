import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nav = [true, false, false, false, false];

  constructor() { }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 767) {
      this.nav = [true, true, true, true, true];
    }
  }

  ngOnInit() {
    if (window.innerWidth > 767) {
      this.nav = [true, true, true, true, true];
    }
  }

  navigate(i) {
    this.nav = [false, false, false, false, false];
    this.nav[i] = true;
  }

}

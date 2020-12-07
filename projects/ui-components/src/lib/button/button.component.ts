import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  times = 0;
  constructor() { }

  ngOnInit(): void { }

  increment(): void {
    this.times += 1;
  }

}

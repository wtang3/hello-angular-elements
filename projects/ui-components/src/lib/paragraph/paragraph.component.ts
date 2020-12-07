import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input() color = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}

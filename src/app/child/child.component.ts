import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  childMsg = 'I am Child';
  constructor() { }

  // tslint:disable-next-line: no-input-rename
  @Input('m') msg: string;

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(`Child OnChange`);

  }

}

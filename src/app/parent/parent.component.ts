// tslint:disable-next-line: max-line-length
import { Component, ViewChild, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
// tslint:disable-next-line: max-line-length
export class ParentComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  parentMsg = 'Msg From Parent';
  counter: number;
  name = 'Dhruvit';
  constructor() {
    this.counter = 1;

  }
  ngOnChanges() {
    console.log(`OnChange ${this.counter++}`);
  }
  ngOnInit() {
    console.log(`OnInit ${this.counter++}`);
  }
  ngDoCheck() {
    console.log(`DoCheck ${this.counter++}`);
  }
  ngAfterContentInit() {
    console.log(`AfterContentInit ${this.counter++}`);
  }
  ngAfterViewInit() {
    console.log(`AfterViewInit ${this.counter++}`);
  }
  ngAfterContentChecked() {
    console.log(`AfterContentChecked ${this.counter++}`);
  }
  ngAfterViewChecked() {
    console.log(`AfterViewChecked ${this.counter++}`);
  }
  ngOnDestroy() {
    console.log(`OnDestroy ${this.counter++}`);
  }

 
}

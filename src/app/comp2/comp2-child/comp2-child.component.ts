import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "app-comp2-child",
  templateUrl: "./comp2-child.component.html",
  styleUrls: ["./comp2-child.component.scss"]
})
export class Comp2ChildComponent implements OnInit, OnChanges {
  @Input() sum;
  @Output() notifyParent = new EventEmitter();

  constructor() { }

  ngOnInit() {  }

  notifyParentLocal() {
    this.notifyParent.emit("hello");
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}

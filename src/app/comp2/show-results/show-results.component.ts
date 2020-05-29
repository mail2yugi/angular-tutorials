import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-show-results",
  templateUrl: "./show-results.component.html",
  styleUrls: ["./show-results.component.scss"]
})
export class ShowResultsComponent implements OnInit, OnChanges {
  @Input() sum;
  @Output() notifyParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
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

  notifyParentLocal() {
    this.notifyParent.emit("hello");
  }
}

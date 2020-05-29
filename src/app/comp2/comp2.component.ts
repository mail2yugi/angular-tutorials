import { Component, OnInit, OnDestroy, DoCheck, ContentChild, AfterContentChecked, AfterContentInit } from "@angular/core";
import { Comp2ChildComponent } from "./comp2-child/comp2-child.component";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.scss"]
})
export class Comp2Component implements OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit {
  input1 = 5;
  input2 = 6;
  sum = 0;

  ngAfterContentInit() {
    alert("ngAfterContentInit");
  }

  ngAfterContentChecked() {
      alert("ngAfterContentChecked");
  }

  constructor() { }

  ngOnDestroy(): void {
    alert("leaving");
  }

  ngOnInit() {
    this.sum = this.input1 + this.input2;
  }

  addIntegers() {
    this.sum = this.input1 + this.input2;
  }

  updateFromChild(arg1) {
    alert("updateParent." + arg1);
  }

  ngDoCheck() {
    console.log("ngDoCheck trigginging");
  }
}

import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.scss"]
})
export class Comp1Component implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {

  }

  ngOnInit() {
  }

}

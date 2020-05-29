import { Component } from "@angular/core";

@Component({
  selector: "app-root",
 // template: "<div (click)="hello()">{{title}}</div>",
 templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "hello console";

  show = true;

  hello() {
    console.log("hello");
    this.show = !this.show;
  }
}

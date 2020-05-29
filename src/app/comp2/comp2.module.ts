import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Comp2RoutingModule } from "./comp2-routing.module";
import { Comp2Component } from "./comp2.component";
import { Comp2ChildComponent } from "./comp2-child/comp2-child.component";
import { ShowResultsComponent } from "./show-results/show-results.component";


@NgModule({
  declarations: [
    Comp2Component,
    Comp2ChildComponent,
    ShowResultsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    Comp2RoutingModule
  ],
  exports : [Comp2Component]
})
export class Comp2Module { }

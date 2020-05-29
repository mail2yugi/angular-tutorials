import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Comp1Component } from "./comp1/comp1.component";



const routes: Routes = [
  { path: "", redirectTo: "comp1", pathMatch: "full"},
  { path: "comp1", component: Comp1Component},
  { path: "comp2", loadChildren: "./comp2/comp2.module#Comp2Module"},
  { path: "**", redirectTo: "comp1", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

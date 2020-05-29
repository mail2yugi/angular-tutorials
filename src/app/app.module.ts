import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Module } from "./comp2/comp2.module";
import { RouterModule } from "@angular/router";
import { Comp3Module } from "./comp3/comp3.module";


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    Comp2Module,
    Comp3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

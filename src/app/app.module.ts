import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SimpleAnimationComponent} from "./simple-animations/simpleAnimationComponent";
import {AnimateElementComponent} from "./animateElementsComponent/animate.element";
import {AnimateModule} from "./animateElementsComponent/animate.module";
import {DynamicModule} from "./dynamicDimension/dynamic.module";
import {ListModule} from "./listAnimation/list.module";
import {AnimateGroupModule} from "./animateGroup/animate.group.module";

@NgModule({
  declarations: [
    AppComponent,
    SimpleAnimationComponent,

    //AnimateElementComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AnimateModule, DynamicModule,ListModule, AnimateGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

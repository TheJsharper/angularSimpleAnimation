import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { SimpleAnimationComponent} from "./simple-animations/simpleAnimationComponent";
import {AnimateModule} from "./animateElementsComponent/animate.module";
import {DynamicModule} from "./dynamicDimension/dynamic.module";
import {ListModule} from "./listAnimation/list.module";
import {AnimateGroupModule} from "./animateGroup/animate.group.module";
import {AnimateGroupKeyframesModule} from "./animateGroupKeyframe/animateGroupKeyframes.module";

@NgModule({
  declarations: [
    AppComponent,
    SimpleAnimationComponent,

    //AnimateElementComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AnimateModule, DynamicModule,ListModule, AnimateGroupModule, AnimateGroupKeyframesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

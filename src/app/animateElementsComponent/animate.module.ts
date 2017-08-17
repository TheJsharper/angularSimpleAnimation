import {NgModule} from "@angular/core";
import {AnimateElementComponent} from "./animate.element";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {Animations} from "./animations.element";

@NgModule({
  declarations:[AnimateElementComponent],
  imports:[BrowserAnimationsModule,CommonModule],
  exports:[AnimateElementComponent]


})
export class AnimateModule{}

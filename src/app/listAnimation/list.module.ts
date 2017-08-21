import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListAnimationComponent} from "./list.animation.component";

@NgModule({
  imports:[CommonModule],
  declarations:[ListAnimationComponent],
  exports:[ListAnimationComponent]
})
export class  ListModule{}


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DynamicDimension} from "./dynamic.dimension";

@NgModule({
  declarations:[DynamicDimension],
  imports:[CommonModule],
  exports:[DynamicDimension]
})
export  class DynamicModule{}

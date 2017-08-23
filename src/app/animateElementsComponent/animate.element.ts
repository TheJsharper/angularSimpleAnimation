import {Component} from "@angular/core";
import {Animations} from "./animations.element";

@Component({
  selector:'animate-element',
  template:`
  <button (click)="shown= !shown" class="btn-success" > toggle element</button>
      <p *ngIf="shown" [@showState]="shown? 'shown':'notShown'" class="text"> some text</p>
  
  `
  , styles:['.text{ background-color:deepskyblue ;color:white; font-size: 20px; text-align: center }'],
  animations:[Animations.toggle]

})
export  class AnimateElementComponent{
  shown:boolean = false
}

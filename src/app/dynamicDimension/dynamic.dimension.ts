import {Component} from "@angular/core";
import {DynamicDimensionAnimation} from "./dynamic.dimension.animation";

@Component({
  selector: 'dynamic-element',
  template: `

    <button (click)="width = width -50  ">Shrink</button>
    <button (click)="animate =!animate ">Animate me</button>
    <p [ngStyle]="{'width.px': width}" [@dynamicAnimationState]="animate?'animated':'notAnimated'"> shrink me!</p>


  `,
  styles: [`
    p {
      background-color: deepskyblue;
      color: white;
      border: 2px solid black;
      height: 50px;
    }

    button {
      margin-bottom: 20px;
    }

  `],
  animations: [DynamicDimensionAnimation.dynamicDimensionState]


})

export class DynamicDimension {
  width: number = 400;
  animate: boolean = false;

}

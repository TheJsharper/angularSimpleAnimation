
import {animate, AnimationTriggerMetadata, style, transition, trigger} from "@angular/animations";

export class DynamicDimensionAnimation{
 static get dynamicDimensionState():AnimationTriggerMetadata{
    return trigger('dynamicAnimationState',[
     transition('*<=>*',[
       animate(400, style({  width:0  })),
       //animate(400, style({width:'100%'}))
       animate(400, style({width:'*'}))
       ]
     )
    ]);
  }
}

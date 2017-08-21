import {animate, AnimationTriggerMetadata, style, transition, trigger} from "@angular/animations";

export class ListAnimation{

  static get listAnimation():AnimationTriggerMetadata{
    return trigger('listAnimationTrigger',[
        transition(':enter',[animate(400, style({opacity:0,  transform: 'perspective(500px) translate3d(10px,20px,100px)'}))]),
        transition(':leave',[animate(400, style({opacity:0,  transform: 'perspective(500px) translate3d(10px,200px,100px)'}))])
    ]);
  }
}

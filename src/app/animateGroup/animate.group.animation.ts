import {animate, AnimationTriggerMetadata, group, style, transition, trigger} from "@angular/animations";

export class AnimateGroupAnimation {
  static get TriggerGroup(): AnimationTriggerMetadata {
    return trigger('listGroupTrigger',
      [
        transition(':enter',[
          style({opacity:0, backgroundColor:'white'}),
         group([
           animate(1000, style({opacity:0.5})),
           animate(2000,style({backgroundColor:'pink'}))

         ]),
          animate(600,style({backgroundColor:'lightblue'}))
        ]),
        transition(':leave',[
          animate(200, style({opacity:0})),
          group([
            animate(2000, style({opacity:0.7,  transform: 'perspective(500px) translate3d(10px,200px,100px)'})),
            animate(3000, style({ opacity:1, transform: 'scale(2.5)'})),
          ]),
          animate(1000, style({opacity:0, transform: 'translate3d(100%, 0, 0)'}))
        ])
      ]
    );
  }
}

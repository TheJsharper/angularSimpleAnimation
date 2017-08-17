
import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export  class Animations{
   static  get toggle():AnimationTriggerMetadata{
      return trigger('showState',
        [
      //  state('notShown', style({})),
       // state('shown', style({})),
         // transition('void=> shown',
          transition('void=> *',
            [
              style({ opacity:0,  transform: 'translate3d(100%, 0, 0)'}),
              //animate(300, style({opacity:1}))
              animate(300)
            ]
          ),

          //transition('shown=> void',
          transition('*=> void',
            [
             // style({ opacity:0}),
              //animate(300, style({opacity:1}))
              animate(300, style({opacity:0, transform: 'translate3d(-100%, 0, 0)'}))
            ]
          )

      ]);
   }
}

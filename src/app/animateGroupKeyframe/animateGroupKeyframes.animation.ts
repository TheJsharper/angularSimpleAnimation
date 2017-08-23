import {animate, AnimationTriggerMetadata, group, keyframes, style, transition, trigger} from "@angular/animations";

export class AnimateGroupKeyframesAnimation {
  static get AnimationList(): AnimationTriggerMetadata {
    return trigger('listState', [
      transition(':enter', [
        group([
            animate(1000, style({opacity: 0.7, backgroundColor: 'white'})),
            animate('5000ms ease-out',
              keyframes([
                style({backgroundColor: 'white', offset: 0}),
                style({backgroundColor: 'red', offset: 0.8}),
                style({backgroundColor: 'green', offset: 1}),
              ]))
          ]
        ),
        animate(300, style({backgroundColor: 'lightblue', transform: 'scale(1.5)'}))
      ]),
      transition(':leave', [
          animate('10s ease-out',
            keyframes([
                style({transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'}),
                style({transform: 'rotateY(-90deg)'}),
                style({transform: 'rotateY(-90deg) rotateZ(90deg)'}),
                style({transform: 'rotateY(-180deg) rotateZ(90deg)'}),
                style({transform: ' rotateY(90deg) rotateX(90deg)'}),
                style({transform: ' rotateY(90deg)'}),
        ]))
    ])

  ]);
  }
}

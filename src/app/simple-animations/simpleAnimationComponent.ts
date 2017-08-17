import {Component} from "@angular/core";
import {animate, state, style, transition, trigger, AnimationEvent} from "@angular/animations";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export const TextDivTrigger =
  trigger('clickedState', [
    state('default', style({backgroundColor: 'orange', width: '100px', height: '100px'})),
    state('clicked', style({backgroundColor: 'blue', width: '300px', height: '50px'})),
    state('mousedown', style({backgroundColor: 'red', border: '1px solid black', width: '300px', height: '150px'})),
    transition('default=> clicked', animate('2s 500ms ease-in')),
    transition('clicked=> default', animate('1s 500ms ease-out')),
    transition('mousedown<=> clicked', animate('1s 500ms ease-out')),
    transition('default<=> mousedown', animate('1s 500ms ease-out')),
  ]);


export const NumberEnteredState =
  trigger('numberEnteredState', [
    state('unselected', style({border: '1px solid black', padding: '5px'})),
    state('selected', style({border: '2px solid blue', padding: '4px', backgroundColor: 'lightblue', color: 'white'})),
    transition('unselected=>selected',
      [style({border: '2px solid black', padding: '4px', transform: 'scale(1)'}),
        animate('600ms 100ms ease-out', style({backgroundColor: 'red', transform: 'scale(2.05)', color: 'orange'})),

        animate('2s')
      ],
    )
  ]);

@Component({
  selector: 'simple-animation',
  template: `
    <div class="container-fluid">
    <div class="row" >
      <div class="col col-md-6 col-md-offset-2">
        <div [@clickedState]="states[0]" (click)="onClick($event)" (mousedown)="onClick($event)"
             (mouseenter)="onClick($event)" (mouseout)="onClick($event)"
             (@clickedState.start)="onClickedAnimationStarted($event)"
             (@clickedState.done)="onClickedAnimationDone($event)">
        </div>
        <br/> <br/>
        <p class="simple" [@clickedState]="states[2]"> text </p>
      </div>
      <div col col-md-4>
        <label>started:{{justStartedAnimation | async}} </label>
        <!--<label> done: {{ (justDoneAnimation | async) }} </label>-->
      </div>
    </div>
    <div class="row" >
      <div class="col col-md-8 col-md-offset-4">
        <input type="number" (input)="numberEntered= $event.target.value" min="-100"/>
        <br/>
        <br/>
        <span [@numberEnteredState]="numberEntered ==1 ?'selected':'unselected'">1</span>
        <span [@numberEnteredState]="numberEntered ==2?'selected':'unselected'">2</span>
        <span [@numberEnteredState]="numberEntered ==3?'selected':'unselected'">3</span>
        <span [@numberEnteredState]="numberEntered ==4?'selected':'unselected'">4</span>
        <span [@numberEnteredState]="numberEntered ==5?'selected':'unselected'">5</span>
        <span [@numberEnteredState]="numberEntered ==6?'selected':'unselected'">6</span>
        <span [@numberEnteredState]="numberEntered ==7?'selected':'unselected'">7</span>
        <span [@numberEnteredState]="numberEntered ==8?'selected':'unselected'">8</span>
        <span [@numberEnteredState]="numberEntered ==9?'selected':'unselected'">9</span>
        <span [@numberEnteredState]="numberEntered ==0?'selected':'unselected'">0</span>
      </div>
    </div>
    </div>
  `,

  styles: [`
    .simple {
      color: white;
      font-size: x-large;
      text-align: center;
    }

    span {
      display: inline-block;
    }

  `],
  animations: [TextDivTrigger, NumberEnteredState],

})
export class SimpleAnimationComponent {
  // private clickInfo:boolean=true;
  private states: string[] = ['default', 'clicked', 'mousedown'];
  private numberEntered: number = 0;
  private justStartedAnimation: BehaviorSubject<string> = new BehaviorSubject("");
  private justDoneAnimation: BehaviorSubject<string> = new BehaviorSubject("");


  onClick($evennt: any): void {
    console.log(this.states, "---->");
    let first: string = this.states[0];
    let secound: string = this.states[1];
    let last: string = this.states[2];
    this.states[0] = secound;
    this.states[1] = last;
    this.states[2] = first;
  }

  onClickedAnimationStarted(event: AnimationEvent): void {
    this.justStartedAnimation.next(event.triggerName + " from :" + event.fromState + " to :" + event.toState);
    //this.justStartedAnimation.subscribe(data=> console.log(data))
  }


  onClickedAnimationDone(event: AnimationEvent): void {
    this.justDoneAnimation.next(event.triggerName + " from :" + event.fromState + " to :" + event.toState);
    //this.justDoneAnimation.subscribe(data=> console.log(data))
  }
}


import {Component} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'simple-animation',
  template: `
    <div class="col col-md-10 col-md-offset-2">
    <div [@clickedState]="states[0]" (click)="onClick($event)" (mousedown)="onClick($event)" (mouseenter)="onClick($event)" (mouseout)="onClick($event)" 
         ></div>
      <br/> <br/>
    <p [@clickedState]="states[2]"> text </p>
    <input type="number" (input)="numberEntered= $event.target.value" min="-100"/>
    <br/>
    <br/>
    <span [@numberEnteredState]="numberEntered ==1 ?'selected':'unselected'" >1</span>
    <span  [@numberEnteredState]="numberEntered ==2?'selected':'unselected'" >2</span>
    <span [@numberEnteredState]="numberEntered ==3?'selected':'unselected'" >3</span>
    <span [@numberEnteredState]="numberEntered ==4?'selected':'unselected'" >4</span>
    <span [@numberEnteredState]="numberEntered ==5?'selected':'unselected'" >5</span>
    <span [@numberEnteredState]="numberEntered ==6?'selected':'unselected'" >6</span>
    <span [@numberEnteredState]="numberEntered ==7?'selected':'unselected'" >7</span>
    <span [@numberEnteredState]="numberEntered ==8?'selected':'unselected'" >8</span>
    <span [@numberEnteredState]="numberEntered ==9?'selected':'unselected'" >9</span>
    <span [@numberEnteredState]="numberEntered ==0?'selected':'unselected'" >0</span>
</div>
  `,
  styles: [`
    #simple {
      width: 100px;
      height: 100px;
      background-color: orange;
    }

  `],
  animations: [
    trigger('clickedState', [
      state('default', style({backgroundColor: 'orange', width: '100px', height: '100px'})),
      state('clicked', style({backgroundColor: 'blue', width: '300px', height: '50px'})),
      state('mousedown', style({backgroundColor: 'red', border: '1px solid black', width: '300px', height: '150px'})),
      transition('default=> clicked', animate('2s 500ms ease-in')),
      transition('clicked=> default', animate('1s 500ms ease-out')),
      transition('mousedown<=> clicked', animate('1s 500ms ease-out')),
      transition('default<=> mousedown', animate('1s 500ms ease-out')),
    ]),
    trigger('numberEnteredState',[
      state('unselected', style({border:'1px solid black', padding:'5px'})),
      state('selected', style({border:'2px solid blue', padding:'4px', backgroundColor: 'lightblue'})),
      transition('unselected=>selected',
        [style({border:'2px solid black', padding:'4px'}),
          animate('1s'),
            style({backgroundColor:'red'}),
          animate('2s')
        ],

      )
    ])
  ]
})
export class SimpleAnimationComponent {
  // private clickInfo:boolean=true;
  private states: string[] = ['default', 'clicked', 'mousedown'];
  private numberEntered:number;

  onClick($evennt:any): void {
    console.log(this.states,"---->");
    let first: string = this.states[0];
    let secound: string = this.states[1];
    let last: string = this.states[2];
    this.states[0] = secound;
    this.states[1] = last;
    this.states[2] = first;
  }
}

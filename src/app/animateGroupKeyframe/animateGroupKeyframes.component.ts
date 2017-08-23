import {Component} from "@angular/core";
import {AnimateGroupKeyframesAnimation} from "./animateGroupKeyframes.animation";

@Component({
  selector: 'list-group-keyframes',
  template: `
    <button (click)="add()" class="btn btn-success">add List</button>
      <div class="entry" *ngFor="let entry of list; let index= index;" @listState (mouseenter)="rm(index)" >
        {{entry}}
      </div>
  `,
  styles: [`
    .entry{
      width: 100px;
      text-align: center;
      background-color: cornflowerblue;
      border :1px solid black;
      color: white;
      margin-top: 10px;
      
    }
  `],
  animations:[AnimateGroupKeyframesAnimation.AnimationList]
})
export class AnimateGroupKeyframesComponent {
  list: string[] = [];

  add(): void {
    this.list.push(Math.random().toFixed(2));
  }
  rm(index:number){
    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
  }
}

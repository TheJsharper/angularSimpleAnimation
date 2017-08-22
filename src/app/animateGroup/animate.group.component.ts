import {Component} from "@angular/core";
import {AnimateGroupAnimation} from "./animate.group.animation";

@Component({
  selector: 'list-group',
  template: `

    <button class="btn btn-success" (click)="add()">add list</button>
    <div *ngFor="let entry of result; let index=index" @listGroupTrigger (mouseenter)="rmList(index)" >
      {{entry}}
    </div>


  `,
  animations:[AnimateGroupAnimation.TriggerGroup],
  styles: [`
    list-group{
      display: inline-block;
    }
    div {
      margin-top: 10px;
      background-color: deepskyblue;
      text-align: center;
      font-size: 20px;
      color: white;
      width: 100px;
    }

  `]
})

export class AnimateGroupComponent {
  result: string[] = [];

  add(): void {
    this.result.push(Math.random().toFixed(2));
  }
  rmList(index: number):void{
    let arrayNew = [...this.result.slice(0, index), ...this.result.slice(index + 1)];
    this.result = arrayNew;
  }
}

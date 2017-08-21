import {Component} from "@angular/core";
import {ListAnimation} from "./list.animation";

@Component({
  selector: 'list',
  template: `
    <button (click)="addList()"  > 
      add List</button>
    <div *ngFor=" let entry of result; let i=index"  @listAnimationTrigger (click)="rmList(i)" >{{entry}}</div>
  `,
  styles:[`
    div{
      width:100px;
      color: white;
      background-color: deepskyblue;
      border: 1px solid black;
      margin: 20px 20px;
      text-align: center;
    }
    list{
      display: block;
      height: auto;
      
    }
  
  `],
  animations:[ListAnimation.listAnimation]
})

export class ListAnimationComponent {
  result: string[] = [];

  addList():void{
    this.result.push(Math.random().toFixed(2));
  }
  rmList(index: number):void{
    //this.result =this.result.slice(index,1);
    //console.log(this, this.result, index);
    let arrayNew = [...this.result.slice(0, index), ...this.result.slice(index + 1)];
    this.result = arrayNew;
  }
}

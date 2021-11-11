import {Component, Input, Output, EventEmitter} from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-countdown',
  template: `
    <h4 class="center">Countdown!</h4>
   <div class="center">
     <input type="number" [(ngModel)]="time">
     <button (click)="startCountdown()">{{buttonLabel}}</button>
   </div>
   <div class="center" *ngIf="running==true">
     <p>Output: {{time}}</p>
   </div>
  `,
  styles: [
  ]
})
export class CountdownComponent{

  constructor() { }

  @Input() time=10;
  @Input() buttonLabel ='Start countdown!'
  running = false;
  @Output() timeChange = new EventEmitter<number>();
  @Output() finish = new EventEmitter;

  startCountdown():void{
    this.running = true;
    const startingTime = this.time;
    const subscription = timer(1000, 1000).subscribe(tick =>{
      this.time --;
      this.timeChange.emit(this.time);

      if(this.time <=0){
        subscription.unsubscribe();
        this.running = false;
        this.finish.emit();
        this.time = startingTime;
      }
    });
  }

}

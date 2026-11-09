import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() timer: number = 10;
  @Output() countTime = new EventEmitter<number>();

  myTime: number = 0;
  private intervalId: any = null;

  start(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.myTime = 0;

    this.intervalId = setInterval(() => {
      if (this.myTime < this.timer) {
        this.myTime++;
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.countTime.emit(this.myTime);
  }
}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css'],
})
export class IntervalTimerComponent implements OnInit {
  interavalEl: number[] = [];
  timerEl: number[] = [];

  intervalSubs!: Subscription;
  timerSubs!: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.intervalSubs = interval(1000).subscribe((res: any) => {
      this.interavalEl.push(res);
    });

    this.timerSubs = timer(1500, 1000).subscribe((res: any) => {
      this.timerEl.push(res);
    });
  }

  stopInterval() {
    this.intervalSubs.unsubscribe();
  }

  stopTimer() {
    this.timerSubs.unsubscribe();
  }
}

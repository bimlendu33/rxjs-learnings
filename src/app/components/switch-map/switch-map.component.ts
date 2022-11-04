import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, of, Subscription } from 'rxjs';
import {
  concatMap,
  debounce,
  debounceTime,
  delay,
  map,
  mergeAll,
  mergeMap,
  switchAll,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('testEvent') testEvent!: ElementRef;

  subScrip!: Subscription;
  constructor() {}
  intervalVal = 0;
  ngAfterViewInit(): void {
    //switchMap
    this.subScrip = fromEvent(this.testEvent.nativeElement, 'click')
      .pipe(switchMap((item) => interval(500)))
      .subscribe((res) => {
        console.log('res ', res);
      });
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subScrip.unsubscribe();
  }
}

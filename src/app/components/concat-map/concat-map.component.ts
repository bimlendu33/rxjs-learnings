import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit {
  constructor() {}

  concatMapList: any[] = [];

  ngOnInit(): void {
    let srcObservable = of(1, 2, 3, 4);
    let innerObservable = of('A', 'B', 'C', 'D').pipe(delay(2000));

    srcObservable
      .pipe(
        concatMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return innerObservable;
        })
      )
      .subscribe((ret) => {
        this.concatMapList.push(ret);
      });
  }
}

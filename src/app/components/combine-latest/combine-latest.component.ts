import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, timer } from 'rxjs';
import { map, takeUntil, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
})
export class CombineLatestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let color = of('Black', 'Red', 'Blue');
    let brand = of('Jaguar', 'Ford', 'BMW');
    let price = of(100, 200, 300);

    // 2. Call combineLatest operator, inject multiple observables in array
    const joinStream = combineLatest([color, brand, price]);

    joinStream.subscribe((res) => {
      console.log(res);
    });

    // Emits every 3 seconds
    const sourceA = interval(3000).pipe(map((data) => `SourceA ${data}`));
    // Emits every 1 second
    const sourceB = interval(1000).pipe(map((data) => `SourceB ${data}`));
    //Timer for 30 seconds
    const timer$ = timer(30000);

    /* sourceA
      .pipe(withLatestFrom(sourceB), takeUntil(timer$))
      .subscribe(([src1, src2]) => {
        console.log(src1, src2);
      }); */

    sourceA
      .pipe(withLatestFrom(sourceB), takeUntil(timer$))
      .subscribe(([src1, src2]) => {
        console.log(src1, src2);
      });
  }
}

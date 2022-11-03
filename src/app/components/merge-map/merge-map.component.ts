import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { map, mergeAll, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let sample = of(1, 2, 3, 4, 5, 6, 7);

    // nested subscription
    sample.pipe(map((item) => of(item))).subscribe((res) => {
      res.subscribe((res1) => {
        console.log('no mergemap', res1);
      });
    });

    sample.pipe(map((item) => of(item)), mergeAll()).subscribe((res) => {
      console.log('mergeAll ', res);
    });

    sample.pipe(mergeMap(item => of(item))).subscribe((res) => {
      console.log('mergeMap ', res);
    });
  }
}

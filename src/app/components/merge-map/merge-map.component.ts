import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concatMap, map, mergeAll, mergeMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  intervalObser!: any;
  mergerMapList: any[] =[];

  ngOnInit(): void {
    this.intervalObser = interval(1000).pipe(take(4));

    // nested subscription
    this.intervalObser.pipe(map((item) => of(item))).subscribe((res: any) => {
      res.subscribe((res1: any) => {
        //  console.log('no mergemap', res1);
      });
    });

    this.intervalObser
      .pipe(
        map((item) => of(item)),
        mergeAll()
      )
      .subscribe((res: any) => {
        // console.log('mergeAll ', res);
      });

    this.intervalObser
      .pipe(mergeMap((item) => of('MergeMap ' + item)))
      .subscribe((res: any) => {
        this.mergerMapList.push(res);
      });
  }
}

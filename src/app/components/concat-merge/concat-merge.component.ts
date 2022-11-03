import { Component, OnInit } from '@angular/core';
import { concat, from, interval, merge, of, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.css'],
})
export class ConcatMergeComponent implements OnInit {
  constructor() {}
  concatList: any[] = [];

  ngOnInit(): void {
    let observable1 = interval(1000).pipe(take(6));

    let observable2 = from([70, 71, 72, 73, 74]);

    /*     observable1.subscribe((res) => {
      console.log(res);
    }); */

    concat(observable1, observable2)
      .pipe(map((item) => 'Video ' + item))
      .subscribe((res: any) => {
        // this.concatList.push(res);
      });

    merge(observable1, observable2)
      .pipe(map((item) => 'Video ' + item))
      .subscribe((res: any) => {
        console.log('merge', res);
        this.concatList.push(res);
      });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css'],
})
export class AsyncAwaitComponent implements OnInit {
  details!: any;
  constructor() {}

  ngOnInit(): void {
    this.getUserDetals().then((res) => {
      this.details = res;
      console.log('test', this.details);
    });
  }

  async getUserDetals() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Bimlendu', 'kumar', 'Information Technology']);
      }, 2000);
    });

    const result = await promise;
    return result;
  }
}

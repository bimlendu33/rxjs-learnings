import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrls: ['./custom-observables.component.css'],
})
export class CustomObservablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let csObservable = new Observable((observer) => {
      observer.next({ name: 'Bimlendu Kumar', age: 31 });
      setTimeout(() => {
        observer.complete();
      }, 1000);
    });

    csObservable.subscribe(
      (res) => {      },
      (error) => {
        console.error('Error getting contacts via subscribe() method:', error);
      },
      () => {
      }
    );
  }
}

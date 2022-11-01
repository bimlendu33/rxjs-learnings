import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css'],
})
export class OfOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of([1,2,3,4,5]).subscribe((res) => {
    });
  }
}

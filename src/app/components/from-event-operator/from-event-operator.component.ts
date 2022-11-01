import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrls: ['./from-event-operator.component.css'],
})
export class FromEventOperatorComponent implements OnInit, AfterViewInit {
  @ViewChild('username') username!: ElementRef;
  userName: string = '';

  constructor() {}
  ngAfterViewInit(): void {
    fromEvent(this.username.nativeElement, 'keyup').subscribe((res: any) => {
      console.log('res ', res.target.value);
      this.userName = res.target.value;
    });
  }

  ngOnInit(): void {}
}

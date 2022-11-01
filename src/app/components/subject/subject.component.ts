import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  title: any = 'RXJS Learning';
  constructor(private userService: UserServiceService) {}
  ngOnDestroy(): void {
   // this.userService.setUserInfo('RXJS Learning');
  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((res) => {
      this.title = res;
    });
  }

  changeTitle() {
    this.userService.setUserInfo('RXJS Revisions');
  }
}

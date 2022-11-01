import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

import { take, takeLast, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent implements OnInit {
  usersList1: any[] = [];
  usersList2: any[] = [];
  usersList3: any[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.videosList.subscribe((res: any) => {
      console.log('re1 ', res);
      this.usersList1.push(res);
    });
  }

  updateVideo(video: any) {
    this.userService.videosList.next(video);
  }

  createUser2List() {
    console.log('clciked');
    this.userService.videosList.pipe(take(3)).subscribe((res: any) => {
      console.log(res);
      console.log('re1 ', res);
      this.usersList2.push(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any = 'RXJS Learning';
  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((res) => {
      this.title = res;
    });
  }
}

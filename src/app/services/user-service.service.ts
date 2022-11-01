import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private _userInfo = new BehaviorSubject<any>('RxJS Learning');

  videosList = new ReplaySubject<any>();

  constructor() {}

  setUserInfo(arg: any) {
    this._userInfo.next(arg);
  }

  getUserInfo(): Observable<any> {
    this._userInfo.subscribe((res) => {
    });
    return this._userInfo;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected! : boolean

  // statusSubject : Subject<boolean> = new Subject<boolean>()
  statusSubject : BehaviorSubject<boolean>
    = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem("status") ?? "false" ))
  constructor() { }

  login() {
    this.isConnected = true
    this.statusSubject.next(this.isConnected)
    sessionStorage.setItem("status", this.isConnected.toString())
    localStorage.setItem("status", this.isConnected.toString())
  }

  logout() {
    this.isConnected = false
    this.statusSubject.next(this.isConnected)

    localStorage.clear()
    sessionStorage.clear()
  }
}

import { FakeauthService } from './fakeauth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demoservice',
  templateUrl: './demoservice.component.html',
  styleUrls: ['./demoservice.component.scss']
})
export class DemoserviceComponent {

  statut! : boolean
  constructor(private _auth : FakeauthService){}


  ngOnInit() {
    this.statut = this._auth.isConnected
  }

  login() {
    this._auth.login()
    this.statut = this._auth.isConnected
  }

  logout() {
    this._auth.logout()
    this.statut = this._auth.isConnected
  }
}

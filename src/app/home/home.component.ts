import { FakeauthService } from './../demo/demoservice/fakeauth.service';
import { Component } from '@angular/core';
import { Link } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listeLien : Link[] = [
    {label : "Google", url : 'https://www.google.com'},
    {label : "Youtube", url : 'http://www.youtube.com'},

  ]

  statut! : boolean
  constructor(private _auth : FakeauthService){}

  ngOnInit() {
    this.statut = this._auth.isConnected
  }
}

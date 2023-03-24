import { Component, Input } from '@angular/core';
import { FakeauthService } from '../demo/demoservice/fakeauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() listeLien! : Link[]
  isConnected! : boolean

  constructor(private _auth : FakeauthService){}

  ngOnInit(): void {
   //this.isConnected = this._auth.isConnected
    this._auth.statusSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }
}

export interface Link{
  url : string
  label : string
}

import { Component } from '@angular/core';
import { FakeauthService } from './demo/demoservice/fakeauth.service';
import { Link } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoproject';

  listeLien : Link[] = [
    {label : "Home", url : 'home'},
    {label : "Routing", url : 'demo/demorouting'},
    {label : "@Input()/@Output()", url : 'demo/demoinput'},
    {label : "Service", url : 'demo/demoservice'},
  ]

  constructor(private _auth : FakeauthService){

  }
  ngOnInit() {

  }
}

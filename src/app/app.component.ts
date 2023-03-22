import { Component } from '@angular/core';
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
}

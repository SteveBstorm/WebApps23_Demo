import { StoreService } from './../../services/store.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demorouting',
  templateUrl: './demorouting.component.html',
  styleUrls: ['./demorouting.component.scss']
})
export class DemoroutingComponent {

  stock! : any[]

  constructor(private _store : StoreService){}

  ngOnInit() {
    this.stock = this._store.stock
  }
}

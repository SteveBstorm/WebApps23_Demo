import { StoreService } from './../../../services/store.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent {
  id! : number
  article! : any

  constructor(
    private _ar : ActivatedRoute,
   // private _store : StoreService
  ){}

  ngOnInit(){
    this.article = this._ar.snapshot.data['monArticle']
    //this.id = this._ar.snapshot.params['id']
    //this.article = this._store.getById(this.id)
  }
}

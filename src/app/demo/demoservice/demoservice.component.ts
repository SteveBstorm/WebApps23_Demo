import { FakeauthService } from './fakeauth.service';
import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-demoservice',
  templateUrl: './demoservice.component.html',
  styleUrls: ['./demoservice.component.scss']
})
export class DemoserviceComponent {

  statut! : boolean
  constructor(private _auth : FakeauthService,
    private _poke : PokeService){}


  ngOnInit() {
    //this.statut = this._auth.isConnected
    this._auth.statusSubject.subscribe({
      next : (data : boolean) => this.statut = data
    })
  }
  error! : string
  pokedex : any
  login() {
    this._auth.login()
    this._poke.get().subscribe({
      next : (data )=> this.pokedex = data,
      error : (error) => {this.error = error.message},
      complete : () => {console.log("Fin de vie de  l'observable")}
    })
  }

  logout() {
    this._auth.logout()

  }
}

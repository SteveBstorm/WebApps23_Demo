import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(
    private _client : HttpClient
  ) { }

  get() : Observable<Pokedex> {
    return this._client.get<Pokedex>("https://pokeapi.co/api/v2/pokemon")
    // .subscribe({
    //   next : (data : any) => console.log(data)
    // })
  }
}
export interface Pokedex {
  count : number
  next? : string
  previous? : string
  results : Result[]
}

export interface Result {
  name : string
  url : string
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stock : any[] = [
    {id : 1, nom : 'Relique de la mort', prix : 42},
    {id : 2, nom : 'Le Graal', prix : 27},
    {id : 3, nom : 'Cuillère', prix : 38}
  ]
  constructor() { }

  getById(id : number) {
    return this.stock.find(x => x.id == id)
  }
}

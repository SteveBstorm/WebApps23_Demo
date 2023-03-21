import { StoreService } from './store.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {

  constructor(private _store : StoreService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let id = route.params['id']
    return this._store.getById(id)
  }
}

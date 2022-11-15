import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { exhaustMap, map, Observable } from 'rxjs';
import { isAuthenticated } from '../store/auth/auth.selector';
import { AppState } from '../store/app.state';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):| boolean | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return this.store.select(isAuthenticated).pipe(
      map((authenticate) => {
        if (!authenticate) {
          return this.router.createUrlTree(['auth/login']);
        }
        return true;
      })
    );
  }
}
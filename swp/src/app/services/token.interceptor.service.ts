import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, catchError, exhaustMap, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { getToken } from '../store/auth/auth.selector';
import { AppState } from '../store/app.state';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
 
    constructor(private store: Store<AppState>) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return this.store.select(getToken).pipe(
        take(1),
        exhaustMap((token:any) => {
          if (!token) {
            return next.handle(req);
          }
          let modifiedReq = req.clone({
            params: req.params.append('auth', token),
          });
          return next.handle(modifiedReq);
        })
      );
    }
    
  

  
}
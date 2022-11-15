import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../../services/auth-service";
import { AppState } from "../app.state";
import { autoLogin, autoLogout, loginStart, loginSuccess } from "./auth.action";
import { setErrorMessage, setLoadingSpinner } from "../shared/shared.action";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{
    constructor(private router:Router, private actions$:Actions, private authService:AuthService, private store: Store<AppState>){}

    login$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action:any) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({status:false}));
                        const user = this.authService.formateUser(data);
                        this.authService.setUserInLocalStorage(user)
                        return loginSuccess({user, redirect: true });
                    }),
                    catchError((errorRes:any)=>{
                        this.store.dispatch(setLoadingSpinner({status:false}));
                        const errorMsg= errorRes.error.error.message
                        return  of(setErrorMessage({message:errorMsg}))

                    })
                )
            })
        )
    })

    loginRedirect$ = createEffect(
        ()=>{
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action)=>{
                if(action.redirect){
                    this.router.navigate(['swp/home'])
                }
               
            })
        );

    }, {dispatch:false});

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(autoLogin),
          mergeMap((action) => {
            const user = this.authService.getUserInLocalStorage();
            if(user) {
                return of(loginSuccess({ user, redirect:false }));
            }else {
                this.router.navigate(['auth/login']);
                return of();
            }
          })
        );
      });

     
      autoLogout$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(autoLogout),
            map((action)=>{
                this.authService.logout();
                this.router.navigate(['auth/login']);
            })
        )

      }, {dispatch:false})
}
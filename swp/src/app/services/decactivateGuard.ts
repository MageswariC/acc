import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateComponent {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
    providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<IDeactivateComponent>{
    constructor() {
    }

    component!: Object;
    route!: ActivatedRouteSnapshot;
    canDeactivate(component: IDeactivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            // console.log("%c currentState", 'background-color:red', currentState)
            return component.canDeactivate();
    }
}
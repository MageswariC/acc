import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as store from '../../store';
import {ActiveMenu, MenusList} from '../../interface/components/menuList'
import { LoadActiveMenuAction, LoadMenuListAction } from '../../store/actions/menuList.action';
import { Observable } from 'rxjs';
import * as menuListSelector from '../../store/selectors/menuList.selectors';

@Injectable({
    providedIn: 'root'
  })
  export class MenuService {
/**
    * Constructor.
    * @param appState$ The application state.
    */
    constructor(protected appState$: Store<store.State>) {

    }

    menuLoad(menuList :any []) {
      this.appState$.dispatch(new LoadMenuListAction(menuList))
    }

    activeMenu(activeMenu : ActiveMenu) {
      this.appState$.dispatch(new LoadActiveMenuAction(activeMenu))
    }

    getMenuList(): Observable<MenusList[]> {
      return this.appState$.pipe(select(menuListSelector.getMenuList));
    }

    getActiveMenu(): Observable<ActiveMenu> {
      return this.appState$.pipe(select(menuListSelector.getActiveMenu));
    }

}
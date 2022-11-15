import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveMenu, MenusList } from '../../interface/components/menuList';
import { menusList} from '../../modal/components/menuList'

// import { MenuService } from '../shared/service/component/menu.service';

@Component({
  selector: 'swp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  login!: string|null; 
  currentUrl: any;
  menusItems : Array<any> = menusList
  menusItems$!: Observable<MenusList[]>;
  activeMenu$!:Observable<ActiveMenu>;
  defaultMenu = {
      title:'home',
      name:'Home',
      route:'/swp/home',
      isActive: true
  }
 
  constructor(router: Router) { 
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;  
      }
    });
  }

  ngOnInit(): void {
    // this.menuService.menuLoad(this.menusItems);
    // this.menuService.activeMenu(this.defaultMenu);
    // this.menusItems$ = this.menuService.getMenuList();
    // this.activeMenu$ = this.menuService.getActiveMenu();
  }

  // activeMenu($event: any){
  //   this.menuService.activeMenu($event)
  // }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { menusList } from '../../modal/components/menuList';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getmenuList } from 'src/app/store/shared/shared.selector';
import { getUserState } from 'src/app/store/auth/auth.selector';
import { getCurrentRoute } from 'src/app/store/router/router.selector';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = 'rluser'
  menus: any = [];
  submenu: any = [];
  nextedSubMenu: any = [];
  innerMostnextedSubMenu: any = [];
  path: any = location.pathname;
  menusList:any;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getmenuList).subscribe(data => {
      this.menusList = data;
    });
    this.store.select(getCurrentRoute).subscribe(state => {
      this.path = state.url;
      this.recurFunction(menusList, state.url);
      if(state.url == '/auth/login'){
        const user = localStorage.getItem('user');
        if(user){
          this.router.navigate(['swp/home']);
        }
      }
      console.log("%c current url", 'background-color:green', state.url)
    });
    this.store.select(getUserState).subscribe((user) => {
      console.log("this.user$ ", user)
    });

    // this.menus[0] = true;
    // this.router.navigateByUrl(this.menusItems[0].route);

    // this.router.events.subscribe((val) => {
    //   if (val instanceof NavigationStart) {
    //     let a = document.querySelectorAll('.show');
    //     a.forEach(ele =>{
    //     ele.classList.remove('show');
    //     })
    //     this.path=val.url;
    //     this.recurFunction(menusList, val.url);

    //   }
    // })
  }
  recurFunction(menusList: any, url: any) {
    menusList.forEach((ele: any) => {
      if (ele?.hasChild.length) {
        this.recurFunction(ele.hasChild, url);
      } else {
        if (ele.route === url) {
          let id = ele.id.split('.')
          this.navigateRoute(url, '', id);
        }
      }
    })
  }

  navigateTo(routepath: any) {
    if (routepath != '') {
      this.router.navigateByUrl(routepath);
    }
  }
  navigateRoute(routepath: any, obj: any, index?: any) {

    this.menus = this.menus.map((ele: any) => false);
    this.submenu = this.submenu.map((ele: any) => false);
    this.nextedSubMenu = this.nextedSubMenu.map((ele: any) => false);
    this.innerMostnextedSubMenu = this.innerMostnextedSubMenu.map((ele: any) => false);

    const [parent, child, grandChild, innergrandChild] = index;
    this.menus[parent] = true;
    this.submenu[parent + '.' + child] = true;
    this.nextedSubMenu[parent + '.' + child + '.' + grandChild] = true;
    this.innerMostnextedSubMenu[parent + '.' + child + '.' + grandChild + '.' + innergrandChild] = true;
    if (!obj) return;
    if (!obj.hasChild.length) {
      this.navigateTo(routepath);
    }

  }
  navmenuclick(routepath: any, obj: any, index?: any) {
    if (!obj.hasChild.length) {
      this.navigateTo(routepath);
    }

  }
}

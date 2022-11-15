import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd} from '@angular/router';
import { Store } from '@ngrx/store';
import { autoLogout } from 'src/app/store/auth/auth.action';
import { NgIdleService } from 'src/app/services/idle-time.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNotification: boolean = false;  
  currentRoute:any = "";
  constructor( private store:Store<AppState>, private ngIddle:NgIdleService) { }

  ngOnInit(): void {
}

  openNotification(state: boolean) {
    this.showNotification = state;
  }
  logout(event:Event){
    event.preventDefault();
      // stop all timer and end the session
      NgIdleService.runTimer = false;
      NgIdleService.runSecondTimer = false;
    this.store.dispatch(autoLogout());
    // this.authService.authLogout();

  }

}

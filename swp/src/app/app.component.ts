import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { autoLogin } from './store/auth/auth.action';
import { getUserState } from './store/auth/auth.selector';
import { NgIdleService } from './services/idle-time.service';
import { ModalComponent } from './shared/Library/modal/modal.component';
import { AppState } from './store/app.state';
import { setErrorMessage } from './store/shared/shared.action';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swp-portal';
  modalObj: any;


  showLoading$!: Observable<boolean>;
  message: any;
  showSessionPopup = false;
  idleTimerLeft!: string;
  secondTimerLeft!: string;
  @ViewChild('modal')
  private modalComponent!: ModalComponent;
  async openModal(obj?: any) {
    return await this.modalComponent.open(obj);
  }
  constructor(private router: Router, private ngIdle: NgIdleService, private store: Store<AppState>) { }
  ngOnInit(): void {
    this.store.dispatch(autoLogin());
    this.store.select(getUserState).subscribe((user) => {
      if (user) {
        this.initTimer(29, 1);
      }
    });


    this.showLoading$ = this.store.select(getLoading);
    this.store.select(getErrorMessage).subscribe((error) => {
      if (error != '') {
        this.modalObj = {
          modalTitle: "error title",
          modalBodyData: error,
        }
        this.openModal({ modalSize: 'md' });
      }
    })

  }

  ConfirmationEvent(data: any) {

    this.store.dispatch(setErrorMessage({ message: '' }));
  }
  initTimer(firstTimerValue: number, secondTimerValue: number): void {
    // Timer value initialization
    this.ngIdle.USER_IDLE_TIMER_VALUE_IN_MIN = firstTimerValue;
    this.ngIdle.FINAL_LEVEL_TIMER_VALUE_IN_MIN = secondTimerValue;
    // end

    // Watcher on timer
    this.ngIdle.initilizeSessionTimeout();
    this.ngIdle.userIdlenessChecker.subscribe((status: string) => {
      this.initiateFirstTimer(status);
    });

    this.ngIdle.secondLevelUserIdleChecker.subscribe((status: string) => {
      this.initiateSecondTimer(status);
    });
  }
  initiateFirstTimer = (status: string) => {
    switch (status) {
      case 'INITIATE_TIMER':
        break;

      case 'RESET_TIMER':
        break;

      case 'STOPPED_TIMER':
        this.showSendTimerDialog();
        break;

      default:
        this.idleTimerLeft = this.formatTimeLeft(Number(status)) || '';
        break;
    }
  }
  showSendTimerDialog(): void {
    this.showSessionPopup = true;
  }
  initiateSecondTimer = (status: string) => {
    this.message = this.secondTimerLeft;
    switch (status) {
      case 'INITIATE_SECOND_TIMER':
        break;

      case 'SECOND_TIMER_STARTED':
        break;

      case 'SECOND_TIMER_STOPPED':
        this.onSessionAutoLogout();
        break;

      default:
        this.secondTimerLeft = status;
        break;
    }
  }
  formatTimeLeft(time: number) {
    if (time > 0) {
      let seconds = Math.trunc(time / 1000);
      let min = 0;
      if (seconds >= 60) {
        min = Math.trunc(seconds / 60);
        // console.log(min);
        seconds -= (min * 60);
      }
      return `${min}:${seconds}`;
    }
    return false;
  }

  onContinueSession(): void {
    // stop second timer and initiate first timer again
    this.showSessionPopup = false;
    NgIdleService.runSecondTimer = false;
    this.ngIdle.initilizeSessionTimeout();
  }
  onSessionLogout(): void {
    // stop all timer and end the session
    this.showSessionPopup = false;
    NgIdleService.runTimer = false;
    NgIdleService.runSecondTimer = false;
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }
  onSessionAutoLogout(): void {
    // stop all timer and end the session
    NgIdleService.runTimer = false;
    NgIdleService.runSecondTimer = false;
    localStorage.removeItem('user');
    this.ngIdle.sessionExpired.next('expired');
  }

}

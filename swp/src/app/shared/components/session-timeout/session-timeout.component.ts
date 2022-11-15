import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIdleService } from 'src/app/services/idle-time.service';

@Component({
  selector: 'app-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.scss']
})
export class SessionTimeoutComponent implements OnInit {
  @Input()message:any;
  isTimeout = false;
  @Output() sessionLogout = new EventEmitter<string>()
  @Output() sessionContinue = new EventEmitter<string>()
  constructor(private ngIdle: NgIdleService) {}

  ngOnInit(): void {
    this.ngIdle.sessionExpired.subscribe((msg)=>{
      if(msg=='expired'){
          this.isTimeout = true;
      }
    })
  }
  onLogout(){
    this.sessionLogout.emit();
  }
  ngOnChanges(){
  }
  onContinueSession(){
    this.sessionContinue.emit();
    

  }

}

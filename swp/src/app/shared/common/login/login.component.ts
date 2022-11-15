import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginStart } from '../../../store/auth/auth.action';
import { AuthService } from '../../../services/auth-service';
import { FormService } from '../../service/component/form.service';
import { AppState } from '../../../store/app.state';
import { setLoadingSpinner } from '../../../store/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted!: boolean;
  constructor(private store:Store<AppState>,   private formService:FormService,  router:Router, private seriveName:AuthService ) {}

  ngOnInit(): void {
  this.login = new FormGroup({
     username: new FormControl(null,[Validators.required]),
     password: new FormControl(null,[Validators.required,Validators.minLength(8)])
  });

  }

  get f(): { [key: string]: AbstractControl } {
  return this.login.controls;
  }

  submit() { 
    this.submitted = true;
    if(this.login.valid)
    {
    // this.authService.authLogin(this.login.value);
    const email = this.login.value.username;
    const password = this.login.value.password;
    // this.router.navigateByUrl("/swp/home")
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(loginStart({email, password}))

    } else return
  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { autoLogout } from "../store/auth/auth.action";
import { AuthResponse } from "../shared/modal/auth/authResponse.model";
import { User } from "../shared/modal/auth/user.model";
import { AppState } from "../store/app.state";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    timeoutInterval:any;
    constructor(private http: HttpClient, private store:Store<AppState>){

    }
    login(email:string, password:string):Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`, {email, password, returnSecureToken:true})
    }

    formateUser(data:AuthResponse){
        const expirationTime = new Date(new Date().getTime()+ +data.expiresIn*1000)
        const user = new User(data.email, data.idToken, data.refreshToken, expirationTime);
        return user;
    }
    setUserInLocalStorage(user:User){
        localStorage.setItem('user', JSON.stringify(user));
        this.checkTokenExpiration(user)
      
    }
    checkTokenExpiration(user:User){
        const todayDate = new Date().getTime();
        const expirationDate = user.getExpirationTime.getTime();
        const timeInterval = expirationDate - todayDate;
        // console.log("timeInterval", timeInterval)
        // this.timeoutInterval = setTimeout(()=> {
        //        call auto logout api / refresh token api....
        //       this.store.dispatch(autoLogout());
        // }, timeInterval)

    }
    getUserInLocalStorage() {
        const userDateString = localStorage.getItem('user');
        if(userDateString){
            const userDate = JSON.parse(userDateString);
            const expirationTime = new Date(new Date().getTime()+ +userDate.expiresIn*1000)
            const user = new User(userDate.email, userDate.idToken, userDate.refreshToken, expirationTime);
            this.checkTokenExpiration(user)
            return user;
        }
        return null;
    }
    logout(){
        localStorage.removeItem('user');
        if(this.timeoutInterval){
                clearTimeout(this.timeoutInterval);
                this.timeoutInterval = null;
        }

    }

}
import { createReducer, on } from "@ngrx/store";
import { autoLogout, loginStart, loginSuccess } from "./auth.action";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState, 
on(loginSuccess, (state, action)=>{
return{
    ... state,
    user:action.user,
}
}), on(autoLogout, (state, action)=>{
    return {
        ... state,
        user:null,
    }
})

);

export function authReducer(state:any, action:any){
    return _authReducer(state, action);
}
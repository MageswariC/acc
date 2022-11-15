import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';
const getAuthSate = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getUserState = createSelector(getAuthSate, (state)=>{
    return state.user
})
export const isAuthenticated = createSelector(getAuthSate, (state) => {
    return state.user ? true : false;
  });
export const getToken = createSelector(getAuthSate, (state)=>{
return state.user ? state.user.getToken:null;
})



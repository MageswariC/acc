import { RouterReducerState } from "@ngrx/router-store";
import { AUTH_STATE_NAME } from "./auth/auth.selector";
import { AuthState } from "./auth/auth.state";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";

export interface AppState{
    [AUTH_STATE_NAME]:AuthState;
    [SHARED_STATE_NAME]:SharedState;
    router:RouterReducerState;
}



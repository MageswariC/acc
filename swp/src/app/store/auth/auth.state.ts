import { User } from "../../shared/modal/auth/user.model"

export interface AuthState{
    user:User | null

}
export const initialState:AuthState = {
    user:null

}
import { MenusList } from "src/app/shared/interface/components/menuList";
import {menusList} from '../../shared/modal/components/menuList'

export interface SharedState{
    showLoading:boolean;
    errorMessage:string
    menuList: MenusList[]
    
}

export const initialState:SharedState = {
    showLoading:false,
    errorMessage:'',
    menuList:menusList
}
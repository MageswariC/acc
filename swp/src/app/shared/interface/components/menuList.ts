export interface MenusList {
    id?:any;
    title?:String;
    name?:String;
    route?: String;
    hasChild?: MenusList[];
    roleAssignee?:any
}

export interface ActiveMenu {
    title?:String;
    name?:String;
    route?:String;
    isActive?:Boolean;
}
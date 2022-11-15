export interface Users {
qpId?: String;
userId?:String;
company?:String;
emailId?:String;
password?:String;
confirmPassword?:String;
principalName?:String;
designation?:String;
contactNo?:String;
faxNo?:String;
expiryDate?:String;
}


export interface UserRoles {
    roleId?:String;
    name?:String;
    description?:String;
}

export interface CompanyList {
    companyId?:String;
    name?:String;
    description?:String;
}

export interface BillingAccounts {
    qpId?: String;
    name?:String;
    description?:String;
}

export interface CreateUser {
    userInfo: Users;
    role: "";
}
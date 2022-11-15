export class User {
    constructor(private email: string, private token: string, private refreshToken: string, private expiresDate: Date) {

    }

    get getExpirationTime(){
        return this.expiresDate
    }
    get getemail(){
        return this.email;
    }
    getToken(){
        return this.token;
    }
}
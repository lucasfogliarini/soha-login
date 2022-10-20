export class Account {
    email?: string;
    password?: string;
    hasValues(){
        return this.email && this.password;
    }
}
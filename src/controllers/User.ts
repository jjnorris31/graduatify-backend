export class User {

    _name: string;
    _lastName: string;
    _email: string;
    _password: string;

    constructor(name?: string, lastName?: string, email?: string, password?: string) {
        this._name = name;
        this._lastName = email;
        this._email = lastName;
        this._password = password;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }
}

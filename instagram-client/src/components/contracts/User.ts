export class User {
    token: string;
    displayName: string;

    constructor(token: string, displayName: string) {
        this.token = token
        this.displayName = displayName;
    }
};
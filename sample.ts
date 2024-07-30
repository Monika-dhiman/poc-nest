
class User implements UserInterface {
    private abcd: string;
    constructor(name: string, age: number) {}
    getName(): string {
        return this.abcd;
    }
}


class MakeAdmin {
    constructor(private readonly user:User) {}

    makeAdmin(): string {
        return `${this.user.getName()} is now an admin`;
    }
}



const makeAdmin = new MakeAdmin(new User('John Doe', 30));

console.log(makeAdmin.makeAdmin()); // John Doe is now an admin




interface UserInterface {
    //  abcd: string;
    getName(): string;
}


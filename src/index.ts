import './style.scss';

class User {
    name: string = '';
    email: string = '';
    age: number = 18;

    constructor(name: string) { 
        this.name = name;
    }

    hello(): string {
        return `Szia, a nevem ${this.name}`;
    }
}

const user1 = new User('Pisti');
const user2 = new User('Sanyi');
const user3 = new User('Enikő');

console.log(user3.age, user3.name);

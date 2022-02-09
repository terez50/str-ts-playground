import {User} from './user';

// Customer class
export class Admin extends User {
    id = 0;
    name = '';
    email = '';
    time: string;

    login(time: string): boolean {
        console.log(`Admin logged in at ${time}.`);
        return true;
    }

    pay(amount: number): boolean {
        console.log(`Bill is ${amount} dollars.`);
        console.log(`Discount: ${amount * .25} dollars.`);
        console.log(`Admin paid ${amount * .75} dollars.`);
        return true;
    }

}
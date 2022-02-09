import {User} from './user';

// Customer class
export class Customer extends User {
    id = 0;
    name = '';
    email = '';

    pay(amount: number): boolean {
        console.log(`Customer paid ${amount} dollars.`);
        return true;
    }
}
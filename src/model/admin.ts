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
    
    pay() {
        return false;
    };
}
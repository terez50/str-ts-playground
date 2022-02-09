import './style.scss';

// Import User class
import { Customer } from './model/customer'; // az index2.ts-hez képest
import { Admin } from './model/admin';

// Create some customers
const customers: Array<Customer> = [ // vagy customers: Customer[]
    new Customer(),
    new Customer(),
    new Customer()
];

console.log( customers[1].pay(25) );

// Create some admins
const admins: Admin[] = [
    new Admin(),
    new Admin(),
    new Admin()
];

console.log( admins[1].login('12:30') );
console.log( admins[1].pay(35) );
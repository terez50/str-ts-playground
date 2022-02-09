import './style.scss';

// Import User class
import { Customer } from './model/customer'; // az index2.ts-hez képest

// Create some users
const customers: Array<Customer> = [ // vagy customers: Customer[]
    new Customer(),
    new Customer(),
    new Customer()
];

console.log( customers[1].pay(25) );
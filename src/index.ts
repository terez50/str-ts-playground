import './style.scss';

// Import the User class.
import { User } from './model/user';
import { Customer } from './model/customer';

// Create some Customers.
const customers: Customer[] = [
    new Customer(),
    new Customer(),
    new Customer(),
];

console.log( customers[1].pay(5) );
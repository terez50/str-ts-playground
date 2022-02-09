import './style.scss';

// Import User class
import { User } from './model/user'; // az index2.ts-hez képest

// Create some users
const users: Array<User> = [ // vagy users: User[]
    new User(),
    new User(),
    new User()
];

console.log( users[1].vacuuming(25) );
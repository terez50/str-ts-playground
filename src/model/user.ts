// User interface.
interface IUser {
    id: number;
    name: string;
    email: string;

    vacuuming(time: number): string;
}

// User class.
export abstract class User implements IUser {
    id = 0;
    name = '';
    email = '';
    
    abstract pay(amount: number): boolean;
    
    vacuuming(time: number): string {
        return `Hello, I am vacuuming for ${time} minutes.`;
    }

}
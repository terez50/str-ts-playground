// User interfész -- csak azt mondjuk meg, mit tartalmaz

interface IUser {
    id: number;
    name: string;
    email: string;

    vacuuming(time: number): string;
}

export abstract class User implements IUser {
    id = 0; // a típust már az interface-ből tudja
    name = '';
    email = '';

    vacuuming(time: number): string {
        return `Hello, I am vacuuming for ${time} minutes.`;
    };

    abstract pay(amount: number): boolean;

}
import './style.scss';

class Vehicle {
    name: string;

    /** @var {string} type - can be water, ground, air */
    type: string;

    constructor(name: string) {
        this.name = name;
    }

    move(from: number, to: number): string {
        return `This vehicle is moving from ${from} to ${to}.`;
    }
}

class GroundVehicle extends Vehicle {
    type: string = 'ground';
    wheels: number = 0;

    constructor(name: string, wheels: number) {
        super(name);
        this.wheels = wheels;
    }
}

class Lorry extends GroundVehicle {
    capacity: number = 0;

    constructor(name: string, wheels: number, capacity: number) {
        super(name, wheels);
        this.capacity = capacity;
    }
}

const volvoTruck = new Lorry('GlobeTrotter', 12, 24000);
console.log( volvoTruck.move(2, 44) );

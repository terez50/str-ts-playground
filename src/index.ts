import './style.scss';    

class Vehicle {
    name: string = '';
    type: string = ''; // vízi, szárazföldi, légi

// üres konstructor automatikusan létrejön, ha nem is adom meg
    constructor (name: string) {
        this.name = name;
    }

    move(from: number, to: number): string {
        return `This vehicle  moves from ${from} to ${to}.`;
    }
}

class GroundVehicle extends Vehicle {
    type: string = 'ground';
    wheels: number = 0;

    constructor (name: string, wheels: number) {
        super(name);
        this.name = name;
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

console.log(volvoTruck.move(2, 44));
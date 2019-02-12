import { read } from "./console";

interface Drivable {
    accelerate(speed: number): void;
    brake(speed: number): void;
    turn(): void;
}

interface Transport extends Drivable {
    fill?(gas: number): void;
}

class Car implements Transport{
    private engine: string;
    private gasTank: number;
    private speed: number;
    private wheels: number;

    constructor (engine: string, wheels: number, gasTank: number, speed: number) {
        this.engine = engine;
        this.wheels = wheels;
        this.gasTank = gasTank;
        this.speed = speed;
    }

    accelerate(speed: number): void {
        this.speed = speed;
        console.log("Машина ускоряется до скорости: " + this.speed + " км/ч");
    };

    brake(speed: number): void {
        this.speed = speed;
        console.log("Машина замедляется до скорости: " + this.speed + " км/ч");
    };

    turn(): void {

    };

    fill(gas: number){
        this.gasTank += gas;
        console.log("Машина заправлена, в баке: " + this.gasTank + " л");
    }
}

class Boat implements Transport{
    private speed: number;
    private engine: string;
    private gasTank: number;

    constructor (engine: string, wheels: number, gasTank: number, speed: number) {
        this.engine = engine;
        this.gasTank = gasTank;
        this.speed = speed;
    }

    accelerate(speed: number): void {
        this.speed = speed;
        console.log("Лодка ускоряется до скорости: " + this.speed + " км/ч");
    };

    brake(speed: number): void {
        this.speed = speed;
        console.log("Лодка замедляется до скорости: " + this.speed + " км/ч");
    };

    turn(): void {

    };

    fill(gas: number){
        this.gasTank += gas;
        console.log("Лодка заправлена, в баке: " + this.gasTank + " л");
    }
}

class ElectricCar implements Transport{
    private engine: string;
    private battery: number;
    private speed: number;
    private wheels: number;

    constructor (engine: string, wheels: number, battery: number, speed: number) {
        this.engine = engine;
        this.wheels = wheels;
        this.battery = battery;
        this.speed = speed;
    }

    accelerate(speed: number): void {
        this.speed = speed;
        console.log("Машина ускоряется до скорости: " + this.speed + " км/ч");
    };

    brake(speed: number): void {
        this.speed = speed;
        console.log("Машина замедляется до скорости: " + this.speed + " км/ч");
    };

    turn(): void {

    };

    fill(battery: number){
        this.battery += battery;
        console.log("Машина заряжена, заряд: " + this.battery + " А*ч");
    }
}


async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    
}

main();
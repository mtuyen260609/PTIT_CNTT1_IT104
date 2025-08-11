interface ChangeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc: ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Giảm tốc: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng xe: ${this.speed} km/h`);
    }
}

const car = new Vehicle();
car.speedUp(50);
car.slowDown(20);
car.stop();
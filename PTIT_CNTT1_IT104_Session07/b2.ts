class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(a: number): void {
        this.speed = this.speed - a;
    }
    speedUp(a: number): void {
        this.speed = this.speed + a;
    }
    showSpeed(): void {
        console.log(`${this.name} (${this.id}) đang chạy với tốc độ ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    public showBicycleInfo(): void {
        this.showSpeed();
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const myBike = new Bicycle("Xe đạp thể thao", 10, 1, 21);

myBike.showBicycleInfo();
myBike.speedUp(5);
myBike.showBicycleInfo();
myBike.slowDown(8);
myBike.showBicycleInfo();
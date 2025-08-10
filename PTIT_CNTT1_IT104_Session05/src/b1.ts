class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayVehicle() {
        console.log(`Tên: ${this.name}`);
        console.log(`Năm: ${this.year}`);
        console.log(`Công ty: ${this.company}`);
        
    }
}
let vehicle1 = new Vehicle("BWM", 2000, "BWM");
let vehicle2 = new Vehicle("AAC", 2030, "SAW");
vehicle1.displayVehicle();
vehicle2.displayVehicle();
interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const c = new Circle(5);
console.log("Hình tròn - Diện tích:", c.calculateArea());
console.log("Hình tròn - Chu vi:", c.calculatePerimeter());

const r = new Rectangle(4, 6);
console.log("Hình chữ nhật - Diện tích:", r.calculateArea());
console.log("Hình chữ nhật - Chu vi:", r.calculatePerimeter());

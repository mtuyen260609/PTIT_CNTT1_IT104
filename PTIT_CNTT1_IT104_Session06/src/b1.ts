abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}

class Rectangl extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}

const rect = new Rectangl("Hình chữ nhật", 10, 5);
console.log("Tên hình:", rect.getName());
rect.getSize();

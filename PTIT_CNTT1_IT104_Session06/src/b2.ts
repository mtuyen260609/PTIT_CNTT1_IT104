abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    private workingHour: number;

    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }

    calculateSalary(): number {
        return 10000000;
    }
}

const parttime = new ParttimeJob("Part-time", 120);
const fulltime = new FulltimeJob("Full-time");

parttime.printType();
console.log("Lương:", parttime.calculateSalary());

fulltime.printType();
console.log("Lương:", fulltime.calculateSalary());

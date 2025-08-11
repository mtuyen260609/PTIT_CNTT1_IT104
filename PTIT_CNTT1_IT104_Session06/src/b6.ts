class Students {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

let allStudents: Students[] = [];

class Classrooms {
    students: Students[] = [];

    showStudents(): void {
        this.students.forEach(s => console.log(`${s.getId()} - ${s.getName()}`));
    }

    addStudent(student: Students): void {
        this.students.push(student);
    }

    filterStudent(id: number): Students[] {
        return this.students.filter(s => s.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}

allStudents.push(
    new Students(1, "An"),
    new Students(2, "Bình"),
    new Students(3, "Chi"),
    new Students(4, "Dũng"),
    new Students(5, "Hà"),
    new Students(6, "Lan")
);

let classA = new Classrooms();
let classB = new Classrooms();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("Lớp A:");
classA.showStudents();
console.log("Lớp B:");
classB.showStudents();

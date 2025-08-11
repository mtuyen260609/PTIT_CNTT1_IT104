class Student {
    constructor(
        public id: number,
        public name: string,
        public age: number
    ) {}
}

class Classroom {
    private students: Student[] = [];
    private allStudents: Student[] = []; // lưu cả học sinh đã bị xóa

    addStudent(student: Student): void {
        this.students.push(student);
        this.allStudents.push(student);
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.id === id);
        if (index !== -1) {
            const removed = this.students.splice(index, 1)[0];
            console.log(`Đã xóa học sinh: ${removed.name}`);
        } else {
            console.log(`Không tìm thấy học sinh có ID ${id}`);
        }
    }

    editStudent(id: number, newName: string, newAge: number): void {
        const student = this.students.find(s => s.id === id);
        if (student) {
            student.name = newName;
            student.age = newAge;
            console.log(`Đã cập nhật thông tin học sinh có ID ${id}`);
        } else {
            console.log(`Không tìm thấy học sinh có ID ${id}`);
        }
    }

    showStudents(): void {
        console.log("Danh sách học sinh hiện tại:");
        this.students.forEach(s => {
            console.log(`ID: ${s.id}, Tên: ${s.name}, Tuổi: ${s.age}`);
        });
    }

    showAllStudents(): void {
        console.log("Danh sách tất cả học sinh (bao gồm đã xóa):");
        this.allStudents.forEach(s => {
            console.log(`ID: ${s.id}, Tên: ${s.name}, Tuổi: ${s.age}`);
        });
    }
}

const classroom = new Classroom();

const s1 = new Student(1, "An", 16);
const s2 = new Student(2, "Bình", 17);
const s3 = new Student(3, "Châu", 16);

classroom.addStudent(s1);
classroom.addStudent(s2);
classroom.addStudent(s3);

classroom.showStudents();

classroom.removeStudent(2);
classroom.showStudents();

classroom.editStudent(3, "Châu Nguyễn", 17);
classroom.showStudents();

classroom.showAllStudents();

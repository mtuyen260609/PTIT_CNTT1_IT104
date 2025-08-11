// 1. Method:
//    - Có phần thân hàm (implementation).
//    - Có thể sử dụng trực tiếp từ lớp cha mà không cần viết lại.
//    - Dùng khi hành vi giống nhau ở tất cả lớp con.
//
// 2. Abstract method:
//    - Không có phần thân hàm (chỉ khai báo).
//    - Bắt buộc lớp con phải override (tự viết phần thân hàm).
//    - Dùng khi hành vi ở mỗi lớp con sẽ khác nhau.
abstract class Jobb {
    printType(): void {
        console.log("Đây là một công việc");
    }
    abstract calculateSalary(): number;
}

class ParttimeJobb extends Jobb {
    calculateSalary(): number {
        return 30000 * 100; 
    }
}

const p = new ParttimeJobb();
p.printType();
console.log("Lương:", p.calculateSalary());

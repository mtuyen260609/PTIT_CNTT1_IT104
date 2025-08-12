class Emplayee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone:string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printinfo(): void{
        console.log(` Tên: ${this.name}`);
        console.log(` Công ty: ${this.company}`);
        console.log(` SĐT: ${this.phone}`);        
    }
}
class Manager extends Emplayee{
    public teamSize: number;
    constructor(name: string, company: string, phone:string, teamSize:number) {
        super(name, company, phone)
        this.teamSize = teamSize;
    }
    printinfo(): void{
        super.printinfo();
        console.log(` Số lượng thành viên: ${this.teamSize} `);
        
    }
}
const manager = new Manager("Nguyễn Văn A", "TNHH1TT", "0123456789", 10)
manager.printinfo();
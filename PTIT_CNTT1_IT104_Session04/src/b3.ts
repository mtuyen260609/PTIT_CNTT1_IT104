type student = [
    name: string,
    age: number,
    email: string
]
const printStudent = (name: string, age: number, email: string) => {
    console.log(`Tên tôi là ${name}, tôi ${age} tuổi và email của tôi là ${email}."`);
    
}
printStudent("Hung", 19, "haha@gmail.com")
const processInput = (input: string | number | boolean): void =>{
    if(typeof input === "string"){
        if (/^\d+$/.test(input)) {
            let num = Number(input);
            console.log(num * num);
        } else {
            let count = 0;
            for (let char of input) {
                if (/[a-zA-Z]/.test(char)) {
                    count++;
                }
            }
            console.log(`${count} ký tự chữ cái`);
        }
    }else if (typeof input === "number"){
        let count = 0;
        for(let i = 1; i <= input; i++){
            if(input % i === 0) count ++;
        }
        if ( count === 2) console.log("Là số nguyên tố")
        else console.log("KO phải số nguyên tố");
    }else if (typeof input === "boolean"){
        if(input === true) console.log("Giá trị là true - tiến hành xử lý")
        else console.log("Giá trị là false - dừng xử lý");
    }else {
        console.log("Định dạng ko hợp lệ");
    }
}
processInput("mot23");
processInput(123);
processInput(true);
processInput(false);

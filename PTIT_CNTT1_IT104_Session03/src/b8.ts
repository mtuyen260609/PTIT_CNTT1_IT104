const checkNum = (value: number | string): boolean =>{
    return !isNaN(Number(value));
}

const tong = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) + Number(b);
    } else {
        return "Tham số không hợp lệ";
    }
};

const hieu = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) - Number(b);
    } else {
        return "Tham số không hợp lệ";
    }
};

const tich = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        return Number(a) * Number(b);
    } else {
        return "Tham số không hợp lệ";
    }
};

const thuong = (a: number | string, b: number | string): number | string => {
    if (checkNum(a) && checkNum(b)) {
        const numB = Number(b);
        if (numB === 0) return "Không thể chia cho 0";
        return Number(a) / numB;
    } else {
        return "Tham số không hợp lệ";
    }
};

console.log(tong(8, "10"));           
console.log(hieu("4", 9));     
console.log(tich("2", "3"));    
console.log(thuong("9", "11"));      
console.log(tong("abc", 5));         
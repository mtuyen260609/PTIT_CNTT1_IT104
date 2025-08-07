const check = (value: string | number) => {
    if (typeof value === "string") {
        console.log(`${value.length} kí tự`);
    }else{
        if (value % 2 == 0) {
            console.log("Đây là số chẵn.");
        }else{
            console.log("Đây là số lẻ.");
        }
    }
}
check("mười một");
check(81);
check(22);
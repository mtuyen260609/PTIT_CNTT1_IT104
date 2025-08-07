const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    const isNumber = !isNaN(Number(input));
    if (isNumber) {
      return Number(input) * Number(input);
    } else {
      const letters = input.match(/[a-zA-Z]/g);
      const count = letters ? letters.length : 0;
      return `${count} ký tự chữ cái`;
    }
  } else if (typeof input === "number") {
    if (input < 2 || !Number.isInteger(input)) {
      return "Không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        return "Không phải là số nguyên tố";
      }
    }
    return "Đây là số nguyên tố";
  } else {
    return input
      ? "Giá trị là true - đang tiến hành xử lý"
      : "Giá trị là false - dừng xử lý";
  }
};

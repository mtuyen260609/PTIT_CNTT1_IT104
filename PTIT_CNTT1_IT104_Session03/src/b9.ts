function toNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

// Các hàm tính toán
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | string {
  if (b === 0) return "Không thể chia cho 0";
  return a / b;
}

function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number | string {
  if (root === 0) return "Không thể chia căn bậc 0";
  return Math.pow(base, 1 / root);
}

function factorial(n: number): number | string {
  if (n < 0) return "Không tính được giai thừa âm";
  if (!Number.isInteger(n)) return "Giai thừa chỉ áp dụng cho số nguyên";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Xử lý khi bấm nút
function handleCalc(op: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value.trim();
  const input2 = (document.getElementById("input2") as HTMLInputElement).value.trim();
  const resultDiv = document.getElementById("result") as HTMLDivElement;

  const num1 = toNumber(input1);
  const num2 = toNumber(input2);

  let result: number | string = "";

  switch (op) {
    case '+':
      result = valid2(num1, num2) ? add(num1!, num2!) : "Lỗi đầu vào";
      break;
    case '-':
      result = valid2(num1, num2) ? subtract(num1!, num2!) : "Lỗi đầu vào";
      break;
    case '*':
      result = valid2(num1, num2) ? multiply(num1!, num2!) : "Lỗi đầu vào";
      break;
    case '/':
      result = valid2(num1, num2) ? divide(num1!, num2!) : "Lỗi đầu vào";
      break;
    case '^':
      result = valid2(num1, num2) ? power(num1!, num2!) : "Lỗi đầu vào";
      break;
    case '√':
      result = valid2(num1, num2) ? sqrt(num1!, num2!) : "Lỗi đầu vào";
      break;
    case '!':
      result = valid1(num1) ? factorial(num1!) : "Lỗi đầu vào";
      break;
    default:
      result = "Phép toán không hợp lệ";
  }

  resultDiv.textContent = `Kết quả: ${result}`;
}

function valid1(a: number | null): boolean {
  return a !== null;
}

function valid2(a: number | null, b: number | null): boolean {
  return a !== null && b !== null;
}

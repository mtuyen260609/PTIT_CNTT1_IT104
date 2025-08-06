let input: string = "hello world";
let result: string = "";

for (let i = 0; i < input.length; i++) {
    if (!result.includes(input[i])) {
        result += input[i];
    }
}

console.log(result);

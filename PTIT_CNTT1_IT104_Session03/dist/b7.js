"use strict";
let input = "hello world";
let result = "";
for (let i = 0; i < input.length; i++) {
    if (!result.includes(input[i])) {
        result += input[i];
    }
}
console.log(result);

function findFirstEven<T>(arr: T[]): T | undefined {
    for (let item of arr) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}

console.log(findFirstEven([1, 3, 5, 8, 11]));
console.log(findFirstEven([1, 3, 5, 7]));
console.log(findFirstEven(["a", 4, "b", 6]));
console.log(findFirstEven([true, false, 10, "abc"]));

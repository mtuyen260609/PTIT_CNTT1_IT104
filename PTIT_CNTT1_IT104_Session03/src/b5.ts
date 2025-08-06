let firstName: string = "john";
let lastName: string = "doe";

function capitalize(word: string): string {
    if (word.length === 0) {
        return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let fullName: string = capitalize(firstName) + " " + capitalize(lastName);
console.log(fullName);

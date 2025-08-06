"use strict";
let firstName = "john";
let lastName = "doe";
function capitalize(word) {
    if (word.length === 0) {
        return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}
let fullName = capitalize(firstName) + " " + capitalize(lastName);
console.log(fullName);

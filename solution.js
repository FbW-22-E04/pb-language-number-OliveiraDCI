// 1
const introSentence = "hello, my name is Fran and I am ";
let age = 36;
console.log(introSentence + age);

// In the case above, the '+' operator converts the number into a string, because of Javascript Type Coersion. This change happens implicitly, matching the different value types so the operation can be executed.

// 2
let integer = "1005";
console.log(parseInt(integer));
let float = "10.05";
console.log(parseFloat(float));

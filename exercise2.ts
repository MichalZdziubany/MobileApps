let flag: boolean = true;
let value: number = 12;
let person: string = "Mike";
let cards: number[] = [1, 2, 3];
let obj: any = { x: 0 };

obj = 15;

console.log("Value is equal to " + value);
console.log("Flag is equal to " + flag);
console.log("Person is equal to " + person);
console.log("Array values are equal to " + cards[0] + " " + cards[1] + " " + cards[2]);
console.log("Any value is " + obj);

obj = "hello";

console.log("Any value is " + obj);
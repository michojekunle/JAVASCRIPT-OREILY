console.log('Smile');

let a = 10;  //assigned a value of 10 to 'a' 

console.log(a) //this would print the value of 'a' in the console of our browser

/*this is a session working with my commenting skills */

//USING BUILT IN METHODS 

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
 
//typeof method
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);


//using built in methods to change primitive data types 
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
 
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);
 
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

//Number() method automatically assigns 0 hen converting an 'empty data type' to a number
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);
 
strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);



// little quiz section
let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str1 , typeof(str1))
console.log(str2 , typeof(str2))
console.log(val1 , typeof(val1))
console.log(val2 , typeof(val2))
console.log(myNum , typeof(myNum))

//quiz 2

let myName = 'Ayo Mich';
let myAge = 16;
let statement = "I Can Code JavaScript";

console.log(`My name is ${myName}`);
console.log(`I am ${myAge} years old.`);
console.log(statement, Boolean(statement));


myArr = [2, 8, 9, 0, 80, 90, 89, 29];

myArr.splice(1, 1, 4);

console.log(myArr);

// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[90]);

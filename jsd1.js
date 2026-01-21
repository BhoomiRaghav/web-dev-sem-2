// // // a=10;
// // // console.log(a);
// // // var a;
// // // let a;
// // // the variable declaration and function declaration will move to the top of their scope before code execution. However, 'let' does not allow redeclaration of the same variable within the same scope, leading to a SyntaxError in this case.
// // // Hoisting only applies to 'var' and function declarations, not to 'let' or 'const'.
// // // let and const are tdz (temporal dead zone) which means they cannot be accessed before their declaration. We need to initialize them before use. Without initialization, it will throw a ReferenceError and would lie in the temporal dead zone.
// // // Ques Take a array with length 10 and keep ten diff student marks in b/w 0 to 40 and check which student has passed and which has failed. (pass marks is 16)(use filter method)
// // let marks = [12, 25, 30, 15, 18, 22, 8, 35, 14, 28];
// // let passMarks = 16;
// // let passedStudents = marks.filter(marks =>{
// //     if(marks >= passMarks){
// //         console.log("Student with marks " + marks + " has Passed.");
// //     }else{
// //         console.log("Student with marks " + marks + " has Failed.");
// //     }

// // } );
// // // let failedStudents = marks.filter(marks => marks < passMarks);
// // // for (let i = 0; i < marks.length; i++) {
// // //     if (marks[i] >= passMarks) {
// // //         console.log("Student with marks " + marks[i] + " has Passed.");
// // //     } else {
// // //         console.log("Student with marks " + marks[i] + " has Failed.");
// // //     }
// // // }
// // // console.log("Passed Students Marks: " + passedStudents);
// // // console.log("Failed Students Marks: " + failedStudents);


// // // ques2 Find the sum of all the elements inside an array with for loop.
// // let arr = [5, 10, 15, 20, 25];
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// // }
// // console.log("Sum of all elements in the array: " + sum);
// console.log(null)

let sentence = "I am a comma separated sentence";
let words = sentence.split(" ");
console.log(words);

let sentence2 = "I am a comma separated sentence";
let words2 = sentence2.split("a");
console.log(words2);
// q1 find out the occurance of "r" in the given string with split method
let str = "tu meri me tera me teri tu mera";
let count = str.split("r").length - 1;
console.log("The occurance of 'r' in the given string is: " + count);

// types of functions
// 1. regular func
function greet1() {
    console.log("Hello from function declaration!");
}
greet1();

// 2. 
const greet2 = function() {
    console.log("Hello from function expression!");
};
greet2();

// 3. arrow function
const greet3 = () => {
    console.log("Hello from arrow function!");
};
greet3(); 

const test=(c,d)=>{
    return c+d;
}
console.log(test(4,5))





setInterval(()=>{
    console.log("sign up")

}, 1000)

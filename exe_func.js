// // ================== 1
// function sayHello() {
//   console.log("Hello from the function");
// }
// // ================== 2
// function printOneToThree() {
//   for (let i = 0; i < 3; i++) {
//     console.log(i + 1);
//   }
// }
// // ================== 3
// function printLength() {
//   list = ["efraim", "sari", "miri", "chaim"];
//   console.log(list.length);
// }
// // ================== 4
// function printStudent(name = "Dana", age = 16) {
//   student = {
//     name: name,
//     age: age,
//   };
//   console.log(student);
// }
// // ================== 5
// function printEvensToTen() {
//   for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
//   }
// }
// // ================== 6
// function sumTwoNumbers() {
//   let a = 5;
//   let b = 7;
//   return a + b;
// }
// // ================== 7
// function getNamesLength() {
//   let list = ["Dana", "Noa", "Yossi", "Ali"];
//   return list.length;
// }
// // ================== 8
// function getGrade() {
//   let grade = 72
//   return grade
// }
// // ================== 9
// function getProduct() {
//   let x = 2
//   let y = 3
//   let z = 4
//   return x * y * z
//   }
// // ================== 10

// // cals:
// sayHello();
// printOneToThree();
// printLength();
// printStudent();
// printEvensToTen();
// console.log(sumTwoNumbers());

// let length = getNamesLength();

// if (length > 4) {
//   console.log("Big class");
// } else {
//   console.log("Small class");
// }

// let studentGrade = getGrade()
// if (studentGrade > 60){
//   console.log('Passed')
// }
// else {
//   console.log('Failed')
// }
// console.log(getProduct())

// ================== 2.1
// function printScore(score) {
//   console.log(`Score is: ${score}`)
// }
// let score = 80;
// printScore(score)

// ================== 2.2
// let grade2 = 50
// function increaseGrade(grade) {
//   grade2 += 10
//   console.log(grade2)
// }
// increaseGrade(grade2);
// ================== 2.3
// let counter = 0
// function incrementCounter() {
//   counter += 1
//   console.log(counter)
// }
// incrementCounter()
// console.log(counter)

// ================== 2.4
// let name = "Outer"
// function printName(name) {
//   console.log(name)
// }
// printName("Inner")
// ================== 2.5
// function createSecret(){
//   let secret = 1234
//   console.log(secret)
// }
// console.log(secret)
// ================== 2.6
// function trash(a,b) {
//   return a + b
// }
// let a = 100
// console.log(trash(5,7))
// ================== 2.7
// function changeGrade(student) {
//   student.grade = 100;
//   console.log(student);
// }
// efi = {
//   Name : 'efraim',
//   grade : 70
// }
// changeGrade(efi)
// ================== 2.8
// function sumOfNumbers(list) {
//   return  list.reduce((acc, num) => acc + num, 0);
// }
// list = [1,2,3,4,5]
// console.log(sumOfNumbers(list))
// ================== 2.9
// function printMassage(massage) {
//   if (typeof massage == 'string') {
//     console.log(massage)
//     return
//   }
//   else {
//     console.log('No massage')
//   }
// }

// printMassage('hi')

// ================== 2.10
// const baseScore = 50;
// function addBonus(baseScore) {
//   console.log(baseScore + 20)
// }
// addBonus(baseScore)
// ================== 3.1
// let sayHi = () => {console.log('Hi from arrow function')}
// sayHi()
// ================== 3.2
// let doubleNumber = (n) => ({n * 2})
// let result = doubleNumber(5)
// console.log(result);
// ================== 3.3
// let sumThree = (a,b,c) =>  [a,b,c].reduce((acc, num) => acc + num, 0)
// console.log(sumThree(5,4,7));
// ================== 3.4
// let getFirstElement = (arr) => arr[0]
// console.log(getFirstElement(["a","b","c"]));
// ================== 3.5
// let isAdult = (age) => (age>18)
// console.log(isAdult(16));
// console.log(isAdult(20));
// ================== 3.6
// let square = (number) => number**2
// console.log(square(5));
// ================== 3.7

// ================== 3.8
// ================== 3.9
// ================== 3.10

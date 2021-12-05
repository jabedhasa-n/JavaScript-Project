
// we can add  many data but we can remove only data {
// //map loop ;
// // -> push
// // -> pop 
// // -> shift
// // -> unshift 
// }
// // -> slice
// // -> splice  
const studentName=['Jabed','Fahad','Abul']
const studentRoll=[10,20,30]
//push add any data last in any array
studentRoll.push(12,40)

//pop remove any data last in any array
studentRoll.pop()

// -> unshift 
studentRoll.unshift(5,6)
// -> shift
studentRoll.shift(5)

const studentNumber=[1,2,3,4,5,6,7]
// // -> slice
//always left to right data copy not right to left 
const student=studentNumber.slice(2,5)
// // -> splice  

const number=studentNumber.splice(2,5)

console.log(studentName);
console.log(studentRoll);

console.log(studentNumber);
// [1, 2]
console.log(student);
//[3, 4, 5]
console.log(number);
//[3, 4, 5, 6, 7]

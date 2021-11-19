// GPA, CGPA, GRADE function for result publishing
 
let resultCal = (name,roll,gpa) => {

    if(gpa>=33 && gpa<=39 && bangla >=33 && english>=33 && math>=33){

    return `
    Student NAME : ${name}
    Your ROLL    : ${roll}
    Your GPA     : ${gpa.toFixed(2)}
    Your CGPA    : 2.5
    your GRADE   : D 
    `
}
else if(gpa>=40 && gpa<=49 && bangla >=33 && english>=33 && math>=33){

    return `
    Student NAME : ${name}
    Your ROLL    : ${roll}
    Your GPA     : ${gpa.toFixed(2)}
    Your CGPA    : 3.0
    your GRADE   : C 
    `
}
else if(gpa>=50 && gpa<=59 && bangla >=33 && english>=33 && math>=33){

    return `
    Student NAME : ${name}
    Your ROLL    : ${roll}
    Your GPA     : ${gpa.toFixed(2)}
    Your CGPA    : 3.5
    your GRADE   : B 
    `
}
else if(gpa>=60 && gpa<=69 && bangla >=33 && english>=33 && math>=33){

    return `
    Student NAME : ${name}
    Your ROLL    : ${roll}
    Your GPA     : ${gpa.toFixed(2)}
    Your CGPA    : 4.0
    your GRADE   : A- 
    `
}
else if(gpa>=70 && gpa<=79 && bangla >=33 && english>=33 && math>=33){

    return `
    Student NAME : ${name}
    Your ROLL    : ${roll}
    Your GPA     : ${gpa.toFixed(2)}
    Your CGPA    : 4.5
    your GRADE   : A 
    `
}
else if(gpa>=80 && gpa<=100 && bangla >=33 && english>=33 && math>=33){

    return `
    Student NAME : ${name}
    Your ROLL    : ${roll}
    Your GPA     : ${gpa.toFixed(2)}
    Your CGPA    : 5.0
    your GRADE   : A+ 
    `
}
else if (gpa>100){
    return `Result not found`
}
else{
        return `
        Student NAME : ${name}
        Your ROLL    : ${roll}
        Your GPA     : ${gpa.toFixed(2)}
        Your GPA     : ${(gpa).toFixed(2)}
        your GRADE   : F 
 `
}
}
let studentName = prompt("Please Type Your Name")
let studentroll = prompt("Please Type Your Roll")
let bangla = parseInt(prompt("please Type Your Bangla Mark"))
let english = parseInt(prompt("please Type Your English Mark"))
let math = parseInt(prompt("please Type Your Math Mark"))

let totalGpa= (bangla + english + math)/3;

console.log(resultCal(studentName,studentroll,totalGpa));


// GPA, CGPA, GRADE function for result publishing

let studentName = prompt("Please Type Your Name");
let studentroll = prompt("Please Type Your Roll");
let bangla = parseInt(prompt("please Type Your Bangla Mark"));
let english = parseInt(prompt("please Type Your English Mark"));
let math = parseInt(prompt("please Type Your Math Mark"));



console.log(
    `
    stundet name = ${studentName}
    stundet roll = ${studentroll}
     
    subject        marks             GPA                grade
    bangla         ${bangla}         ${gpa(bangla)}     ${grade(bangla)}
    English        ${english}        ${gpa(english)}    ${grade(english)}
    Mathematics    ${math}           ${gpa(math)}       ${grade(math)}

    ------------------------------------------------------------------------------
                                            cgpa= ${cgpa(gpa(bangla),gpa(english),gpa(math))} ;
    `
)

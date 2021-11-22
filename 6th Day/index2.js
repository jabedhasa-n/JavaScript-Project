// GPA, CGPA, GRADE function for result publishing

let studentName = prompt("Please Type Your Name");
let studentroll = prompt("Please Type Your Roll");
let bangla = parseInt(prompt("please Type Your Bangla Mark"));
let english = parseInt(prompt("please Type Your English Mark"));
let math = parseInt(prompt("please Type Your Math Mark"));


// ----------------


// -------- function call------------



let lead_name= new MainFunction;

console.log(
    `
    stundet name = ${studentName}
    stundet roll = ${studentroll}
     
    subject        marks             GPA                          grade
    bangla         ${bangla}         ${lead_name.gpa(bangla)}     ${lead_name.grade(bangla)}
    English        ${english}        ${lead_name.gpa(english)}    ${lead_name.grade(english)}
    Mathematics    ${math}           ${lead_name.gpa(math)}       ${lead_name.grade(math)}

    ------------------------------------------------------------------------------
                                            cgpa= ${lead_name.cgpa(lead_name.gpa(bangla),lead_name.gpa(english),lead_name.gpa(math))} ;
    `
)

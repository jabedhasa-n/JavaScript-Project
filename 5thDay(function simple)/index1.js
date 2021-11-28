// GPA, CGPA, GRADE function for result publishing




function gpa ()

let studentName = prompt("Please Type Your Name")
let studentroll = prompt("Please Type Your Roll")
let bangla = parseInt(prompt("please Type Your Bangla Mark"))
let english = parseInt(prompt("please Type Your English Mark"))
let math = parseInt(prompt("please Type Your Math Mark"))

let totalGpa= (bangla + english + math)/3;

console.log(resultCal(studentName,studentroll,totalGpa));



function gpa ca{

    ` Your name ${studentName}
      Your Roll Number ${roll}

    subject         Mark           GPA       GRADE
    Bangla         ${bangla}       
    Englis         ${english}   
    Math           ${math} 
    
    --------------------------------------------------------
    `

}

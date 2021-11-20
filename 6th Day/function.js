function gpa(marks){
    let gpa;
    if (marks>=0 && marks<=32){
        gpa=0;
    }
    else if (marks>=33 && marks<=39){
        gpa=1;
    }
    else if (marks>=40 && marks<=49){
        gpa=2;
    }
    else if (marks>=50 && marks<=59){
        gpa=3;
    }
    else if (marks>=60 && marks<=69){
        gpa=4;
    }
    else if (marks>=70 && marks<=79){
        gpa=4.5;
    }
    else if (marks>=80 && marks<=100){
        gpa=5;
    }
    else{
        console.log("please Type again");
    }
    return gpa;
}


function grade (marks) {
    let grade;
    if (marks>=0 && marks<=32){
        grade = "F";
    }
    else if (marks>=33 && marks<=39){
        grade ="D";
    }
    else if (marks>=40 && marks<=49){
        grade ="C";
    }
    else if (marks>=50 && marks<=59){
        grade = "B-";
    }
    else if (marks>=50 && marks<=59){
        grade="B";
    }
    else if (marks>=60 && marks<=69){
        grade="A-";
    }
    else if (marks>=70 && marks<=79){
        grade="A";
    }
    else if (marks>=80 && marks<=100){
        grade="A+";
    }
    return grade;
}


function cgpa(bangla,english,math){

    let cgpa=(bangla + english + math)/3;

    if(bangla==0 || english ==0 || math==0){
        return "Your are failed";
    }
    else{
      return ` Your cgpa ${cgpa} & CGPA =${cgpaGrade(cgpa)} `;
    }
}

function cgpaGrade(cgpa){

    if(cgpa>=0 && cgpa<=1){
        return "F" ;
    }
    else if(cgpa>=1 && cgpa<2){
        return "D" ;
    }
    else if(cgpa>=2 && cgpa<3){
        return "C";
    }
    else if(cgpa>=3 && cgpa<4){
        return "B" ;
    }
    else if(cgpa>=4 && cgpa<4.5){
        return "A-" ;
    }
    else if(cgpa>=4.5 && cgpa<5){
        return "A-" ;
    }
    else if(cgpa==5){
        return "A+" ;
    }
}
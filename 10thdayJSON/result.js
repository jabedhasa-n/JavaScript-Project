// Create an array  and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result and finally convert it to a JSON String 



let student =[
    {
       name : "Jabed",
       fatherName:"Mohib Ullah",
       bangla : 40,
       english : 50,
       physics : 60,
       chemistry : 70,
       math : 80,
    },
    {
       name : "saki",
       fatherName:"Mohib Ullah",
       bangla : 40,
       english : 50,
       physics : 60,
       chemistry : 70,
       math : 80,
    },
    {
       name : "imran",
       fatherName:"Mohib Ullah",
       bangla : 40,
       english : 60,
       physics : 60,
       chemistry : 70,
       math : 80,
    },
]


let MainFunction = function(){
   this.result=function(a,b,c,d,e){
       if(a<32 || b<32 || c<32 || d<32 || e<32){
           return "You are faild";
       }
       else {
           let sum=0;
           sum=(a+b+c+d+e)/6;
           return `you are passed .your cgpa result is ${sum}`
       }
   }

}

let lead_function = new MainFunction;

student.forEach((data)=>{
   console.log(data)
   console.log(data.bangla)
   
})


for(let i=0;i<student.length;i++){
   console.log(
       `
       ${student[i].name}
       ${student[i].fatherName}
       ======================
       gpa=${lead_function.result(student[i].bangla,student[i].english,student[i].physics,student[i].chemistry,student[i].math)};
       `
    )
   
}


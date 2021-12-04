// - Create an array data structure with some data of fifth-grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result

const fifthStudent=[
    [1,'Imran','Mohib',50,60,70,80,90,95],
    [2,'akbar','Mohib',30,60,80,90,50,55],
    [3,'jamal','Mohib',30,60,40,80,93,95],
    [4,'babor','Mohib',50,60,70,80,90,65],
    [5,'abul','Mohib',50,60,60,80,90,55],
    [6,'kabul','Mohib',50,60,70,80,90,45],
    [7,'mofiz','Mohib',40,60,70,80,90,55],
    [8,'ashiq','Mohib',50,60,30,70,90,45],
    [9,'iqbal','Mohib',30,60,40,80,80,95],
    [10,'manik','Mohib',50,70,70,80,60,95],
]
 

let MainFunction=function(){
    this.result=function(a,b,c,d,e,f){
        
        if(a<33 || b<33 || c<33 || d<33 || e<33 || f<33){
            return "You are fail "
        }
        else {
            let sum=0;
             sum=(a+b+c+d+e+f)/6;
             sum;
            return `You are pass, Your Average mark ${sum}` 
        }
    }
}


let lead_name= new MainFunction;

for(let i=0;i<fifthStudent.length;i++){
    console.log(
        `
        ${fifthStudent[i][0]}
        ${fifthStudent[i][1]}
        ${fifthStudent[i][2]}
        ======================
        gpa=${lead_name.result(fifthStudent[i][3],fifthStudent[i][4],fifthStudent[i][5],fifthStudent[i][6],fifthStudent[i][7],fifthStudent[i][8])};
        `
     )
    
}



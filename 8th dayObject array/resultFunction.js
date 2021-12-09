

const MyFunction=function(){

    this.studentName=(student)=>{
        for(let i=0;i<=student.length;i++){

            if(student[i].location=="Banani"){
                console.log(student[i]);
               }
            if(student[i].location=="Uttora"){
                console.log(student[i]);
            }
        };
    }
    }


const student =[
    {
        name: 'Jabed',
        Roll : '01',
        location : 'Mirpur',
    },
    {
        name: 'emran',
        Roll : '02',
        location : 'Uttora',
    },
    {
        name: 'Saki',
        Roll : '03',
        location : 'Banani',
    }
    

];

let lead_function=new MyFunction();
console.log(lead_function.studentName(student));






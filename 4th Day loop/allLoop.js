const firstName=[
    {
        name :'Jabed',
        skill :'wordpress',
    },
    {

        name :'fahad',
        skill :'java',
    },
    {

        name :'karim',
        skill :'php',
    }
];

///jabed


firstName.forEach((data)=>{
    console.log(data.name);
})
console.log("===================")
firstName.map((data)=>{
    console.log(data.name);
})
console.log("===================")
firstName.map(data=>{
    console.log(data.skill)
})



// ==================

// Create data in a student array and object  where there will be data of about 50 people and print data of Mirpur and Banani residents starting from there 



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

// student.map((data)=>{
//     console.log(data.Location)
// })

for(let i=0;i<=student.length;i++){

    if(student[i].location=="Banani"){
        console.log(student[i]);
       }
    if(student[i].location=="Uttora"){
        console.log(student[i]);
    }
};






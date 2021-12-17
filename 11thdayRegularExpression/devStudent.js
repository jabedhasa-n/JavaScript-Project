// - Create a MERN stack, Laravel, Django, GoLan, WordPress, java deves  students data structure  and convert it to a json string 

// Arrange a data sheet for a family phone book and publish it and convert it to a JSON String 


let devStudent=[
    {
        name:"Jabed",
        sallary: 500,
        Skill : "MERN stack",
    },
    {
        name:"Fahad",
        sallary: 300,
        Skill : "Laravel",
    },
    {
        name:"Kamal",
        sallary: 200,
        Skill : " Django",
    },
    {
        name:"Kamrul",
        sallary: 900,
        Skill : "GoLan",
    },
    {
        name:"Rahad",
        sallary: 900,
        Skill : "WordPress",
    },
    {
        name:"Riaz",
        sallary: 400,
        Skill : "Java",
    }
]


devStudent.forEach((devs)=>{
    console.log(devs);
    console.log("===========")
})

console.log(JSON.stringify(devStudent));
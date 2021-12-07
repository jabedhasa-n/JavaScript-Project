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
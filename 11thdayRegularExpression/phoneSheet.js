// Arrange a data sheet for a family phone book and publish it and convert it to a JSON String 


let phonesheet=[
    {
        name:"Jabed",
        phone: "01793534981",
        village : "Rmgonj",
        relationship:"Relative"
    },
    {
        name:"Fahad",
        phone: "01893564986",
        village : "Rmgonj",
        relationship:"Relative"
    },
    {
        name:"Fahim",
        phone: "01393534927",
        village : "Rmgonj",
        relationship:"Relative"
    },
    {
        name:"Foysal",
        phone: "01493534961",
        village : "Rmgonj",
        relationship:"Relative"
    }
]


phonesheet.forEach((sheet)=>{
    console.log(sheet);
    console.log("===========")
})

console.log(JSON.stringify(phonesheet));
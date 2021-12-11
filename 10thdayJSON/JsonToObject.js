

/// we can weite json file below comment line 
// {
//     "employee":[
//         {
    
//             "name" :"Jabed",
//             "age":20,
//             "skill":"Jave"
//         },
//         {
    
    
//             "name" :"fahad",
//             "age":20,
//             "skill":"python"
//         }
//     ]
// }







///we mus use template literal and then 

const persons=
    `{
        "employees":[
          {
              "firstName":"John",
               "lastName":"Doe"
            },
          {
              "firstName":"Anna",
               "lastName":"Smith"
            },
          {
              "firstName":"Peter",
           "lastName":"Jones"
        }
        ]   
}`

const obj=JSON.parse(persons);
console.log(obj)

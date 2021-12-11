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

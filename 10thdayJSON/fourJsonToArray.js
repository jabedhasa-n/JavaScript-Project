let data=`{
    "Name":"Jabed",
    "age":"20",
    "salary":"20K"
}`
let obj=JSON.parse(data)
console.log(obj)







data=`{
    {
    "name" :"Jabed",
    "age":20,
    "skill":"Jave"
    },
    {

       "name" :"fahad",
       "age":20,
       "skill":"python"
    }
}`

 obj=JSON.parse(data)
 console.log(obj)






data=`{
    "employee":[
    {

    "name" :"Jabed",
    "age":20,
    "skill":"Jave"
    },
    {

         "name" :"fahad",
         "age":20,
         "skill":"python"
    }
 ]
}`

 obj=JSON.parse(data)
 console.log(obj)





data=`{
    "employee":[
    {

    "name" :"Jabed",
    "age":20,
    "skill":"Jave"
    },
    {

         "name" :"fahad",
         "age":20,
         "skill":"python"
    }
 ],
    "person":[
    {

    "name" :"Jabed",
    "age":20,
    "skill":"Jave"
    },
    {

        "name" :"fahad",
        "age":20,
        "skill":"python"
    }
 ]

}`

 obj=JSON.parse(data)
 console.log(obj)



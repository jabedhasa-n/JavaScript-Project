// const data=require('./db.json');

// console.log(data);



const data = `{
    "result":[
        {"name":"Jabed","fatherName":"Mohib Ullah",
        "bangla":40,"english":50,"physics":60,"chemistry":70,"math":80},
        {"name":"saki","fatherName":"Mohib Ullah","bangla":40,"english":50,"physics":60,"chemistry":70,"math":80},
        {"name":"imran","fatherName":"Mohib Ullah","bangla":40,"english":60,"physics":60,"chemistry":70,"math":80}
    ],
    "phoneSheet":[
        {"name":"Jabed","phone":"01793534981","village":"Rmgonj","relationship":"Relative"},
        {"name":"Fahad","phone":"01893564986","village":"Rmgonj","relationship":"Relative"},
        {"name":"Fahim","phone":"01393534927","village":"Rmgonj","relationship":"Relative"},
        {"name":"Foysal","phone":"01493534961","village":"Rmgonj","relationship":"Relative"}
    ],
    "devs":[
        {"name":"Jabed","sallary":500,"Skill":"MERN stack"},
        {"name":"Fahad","sallary":300,"Skill":"Laravel"},
        {"name":"Kamal","sallary":200,"Skill":" Django"},
        {"name":"Kamrul","sallary":900,"Skill":"GoLan"},
        {"name":"Rahad","sallary":900,"Skill":"WordPress"},
        {"name":"Riaz","sallary":400,"Skill":"Java"}
    ]
}`

console.log(JSON.parse(data))
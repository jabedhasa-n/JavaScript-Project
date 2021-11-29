// - Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive.'






// - Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data structure and make their total income sheet with per developer data, Find specific students.


const ageVariation=[
    ['asif',18,'Laravel','Australia',30000],
    ['akbar',33,'Django','Bangladesh',40000],
    ['jahir',30,'GoLang','India',50000],
    ['abul',20,'Java','Australia',60000],
    ['kamal',30,'Django','Bangladesh',70000],
    ['mojib',40,'GoLang','India',80000],
    ['tanha',50,'WordPress','Australia',90000],
    ['afrin',13,'Laravel','Bangladesh',130000],
    ['jamal',70,'WordPress','Australia',140000],
    ['mofiz',30,'Java','India',150000]
 ];
 
 
 for(let i =0; i<ageVariation.length;i++){

    if(ageVariation[i][1]>=0 && ageVariation[i][1]<18 ){

        console.log(`
        ${ageVariation[i][0]}
        ${ageVariation[i][1]}
        ${ageVariation[i][2]}
        ${ageVariation[i][3]}

        you are not allowed if your age is less than 18

        `)
    }
    else if(ageVariation[i][1]>=0 && ageVariation[i][1]<18 ){

        console.log(`
        ${ageVariation[i][0]}
        ${ageVariation[i][1]}
        ${ageVariation[i][2]}
        ${ageVariation[i][3]}

        you are young guy ,welcome to your new journey 

        `)
    }
    else {

        console.log(`
        ${ageVariation[i][0]}
        ${ageVariation[i][1]}
        ${ageVariation[i][2]}
        ${ageVariation[i][3]}

        I am searching you ,welcome weclome our new club

        `)
    }
 
     
 }






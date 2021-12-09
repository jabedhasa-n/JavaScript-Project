// - Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive.'


const ageVariation=[
    ['asif',18,'Laravel','Australia'],
    ['akbar',33,'Django','Bangladesh'],
    ['jahir',30,'GoLang','India'],
    ['abul',20,'Java','Australia'],
    ['kamal',30,'Django','Bangladesh'],
    ['mojib',40,'GoLang','India'],
    ['tanha',50,'WordPress','Australia'],
    ['afrin',13,'Laravel','Bangladesh'],
    ['jamal',70,'WordPress','Australia'],
    ['mofiz',30,'Java','India']
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






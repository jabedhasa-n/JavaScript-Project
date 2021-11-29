




// - Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data structure and make their total income sheet with per developer data, Find specific students.


const devTools=[
    ['asif',30,'Laravel','Australia',30000],
    ['akbar',40,'Django','Bangladesh',40000],
    ['jahir',50,'GoLang','India',50000],
    ['abul',60,'Java','Australia',60000],
    ['kamal',70,'Django','Bangladesh',70000],
    ['mojib',80,'GoLang','India',80000],
    ['tanha',90,'WordPress','Australia',90000],
    ['afrin',100,'Laravel','Bangladesh',130000],
    ['jamal',120,'WordPress','Australia',140000],
    ['mofiz',130,'Java','India',150000]
 ];
 
 let sum=0;
 for(let j=0;j<devTools.length;j++){
     console.log(devTools[j][4]);
     sum= sum+devTools[j][4];  
 }
 console.log('TotalIncome '+sum);
 
 for(let i=0;i<devTools.length;i++){
     if(devTools[i][2]=="Laravel"){
     console.log(devTools[i]);
     }
     console.log("===================================")
 }
 
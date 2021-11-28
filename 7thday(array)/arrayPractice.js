const flowerName=['golap','hasnahena','sapla','rojonigondah','sapla'];


//3 way we can show array   
/// for loop 
for(let i=0;i<flowerName.length;i++){
    console.log(flowerName[i]);
}
//2 for Each loop
flowerName.forEach(function(data){
    console.log(data)
})
flowerName.forEach((data)=>{
    console.log(data)
})

//for each loop but we can show just one line ,we use is react 
flowerName.forEach( data=> console.log(data));

///3 rd way we can show map function

flowerName.map((data)=>{
    console.log(data)
})
flowerName.map  (data => console.log(data));

// - Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data structure and make their total income sheet with per developer data, Find specific students.


const devTools=[
    ['asif',30,'Laravel','Australia',30000],
    ['akbar',30,'Django','Bangladesh',40000],
    ['jahir',30,'GoLang','India',50000],
    ['abul',30,'Java','Australia',60000],
    ['kamal',30,'Django','Bangladesh',70000],
    ['mojib',30,'GoLang','India',80000],
    ['tanha',30,'WordPress','Australia',90000],
    ['afrin',30,'Laravel','Bangladesh',130000],
    ['jamal',30,'WordPress','Australia',140000],
    ['mofiz',30,'Java','India',150000]
 ];
 
 
 for(let i =0; i<devTools.length;i++){
 
     console.log(devTools[i]);
 
     // if(devTools[i])
 }
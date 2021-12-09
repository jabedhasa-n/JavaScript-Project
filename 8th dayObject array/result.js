bardate=['sun','mon','tue','wed','thu','fri','sat']


let todaydate = new Date();

console.log(`
          
         ${bardate[todaydate.getDay()]}

`)



//swith statement
let day ;
switch (todaydate.getDay()){
  case 3:
    day="thursday";
    break;
  case 4:
   day= "thursday";
    break;
  case 5:
    day="thursday";
    break;
  case 6:
    day="thursday";
    break;

  default:
    break;
}

console.log(day)

//function day 

myfunction =(date)=>{
  bardate=['sun','mon','tue','wed','thu','fri','sat']
  return bardate[date]
}

todaydate = new Date();
console.log(myfunction(todaydate.getDay()));
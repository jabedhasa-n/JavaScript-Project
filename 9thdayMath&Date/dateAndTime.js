let todayDate = new Date();

console.log(todayDate);
console.log(todayDate.getDate());
console.log(todayDate.getMonth())
console.log(todayDate.getFullYear())


console.log (`
        
              Date  ${todayDate.getDate()>9 ? todayDate.getDate() : '0' + todayDate.getDate()} 
              Month ${todayDate.getMonth()+1}
              Year :${todayDate.getFullYear()}
              time : ${todayDate.getHours()>12 ? todayDate.getHours()-12 : todayDate.getHours()} ${todayDate.getMinutes()} ${todayDate.getSeconds()} ${todayDate.getHours()>12 ? 'PM' : 'AM'}
`)



//array da

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



const date =new Date();

console.log(date.getTime())



const newdate =new Date(1639060783543);

console.log(newdate);


let birthyear=new Date('2002-12-24 8:43:40')

console.log(birthyear.getTime())

birthyear=new Date(1040697820000)
 b  
console.log(birthyear)

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


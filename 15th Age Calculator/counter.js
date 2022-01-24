

const age_cal=document.querySelector('#age_cal');
const age_date=document.querySelector('#age_date');
const current_age=document.querySelector('#current_age');
const age=document.querySelector('.age');




age_cal.addEventListener('submit',function(e){

  e.preventDefault();
  let agebirth=age_date.value;
  let agecurrent=current_age.value;
 

  let ageBirth= new Date(agebirth)
  let ageCurrent= new Date(agecurrent)


  let diffYear=ageCurrent.getFullYear()-ageBirth.getFullYear();

  let diffMonth=ageCurrent.getMonth()-ageBirth.getMonth();

  if(ageCurrent.getMonth()<ageBirth.getMonth()){
    diffYear=diffYear-1;
  }
  else if(ageCurrent.getMonth()>ageBirth.getMonth()){
    diffYear=diffYear;
  }
  else{
    diffYear;
  }


  if(diffMonth<0){
    diffMonth= diffMonth+12;
  }
  else{
    diffMonth;
  }

  let diffDay=ageCurrent.getDate()-ageBirth.getDate();


  console.log(diffYear + ':' + diffMonth + ':' + diffDay);

  age.innerHTML=` Your Age is ${diffYear} Years , ${diffMonth} months ${Math.abs(diffDay)} days `;
  
})

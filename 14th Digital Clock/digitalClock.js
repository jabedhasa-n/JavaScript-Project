const boxdate=document.querySelector(".boxdate h6")
const boxmonth=document.querySelector(".boxmonth h6")
const boxyear=document.querySelector(".boxyear h6")




setInterval(()=>{
    let date=new Date();
    let nowDate=zero(date.getDate());
    let nowMonth=zero(date.getMonth()+1);
    let nowYear=date.getFullYear();
    boxdate.innerHTML=nowDate;
    boxmonth.innerHTML=nowMonth;
    boxyear.innerHTML=nowYear;
},1000)



const hour=document.querySelector(".boxhour h6")
const minute=document.querySelector(".boxminute h6")
const second=document.querySelector(".boxsecond h6")




setInterval(()=>{
    let date=new Date();
    let nowHour=zero(date.getHours());
    let nowMinute=zero(date.getMinutes());
    let nowSceond=zero(date.getSeconds());
    hour.innerHTML=nowHour<12 ? nowHour%12 : nowHour-12;
    minute.innerHTML=nowMinute;
    second.innerHTML=nowSceond;
},1000)
function zero(date){
    if(date<10){
        return `0${date}`
    }
    else{
        return date;
    }
};


setInterval(()=>{
  const inputbutton=document.querySelector('input[type="radio"]:checked');
  const inputlabel1=document.querySelector('#sun');
  const inputlabel2=document.querySelector('#mon');
  const inputlabel3=document.querySelector('#tue');
  const inputlabel4=document.querySelector('#wed');
  const inputlabel5=document.querySelector('#thu');
  const inputlabel6=document.querySelector('#fri');
  const inputlabel7=document.querySelector('#sat');
  const message=document.querySelector("form p");
  
  let dayToday=new Date();
  let day=dayToday.getDay();
  
  switch (day) {
      case 0:
        day = "Sunday";
        inputlabel1.style.color='red';
        break;
      case 1:
        day = "Monday";
        inputlabel2.style.color='red';
        break;
      case 2:
         day = "Tuesday";
         inputlabel3.style.color='red';
        break;
      case 3:
        inputlabel4.style.color='red';
        break;
      case 4:
        inputlabel5.style.color='red';
        break;
      case 5:
        day = "Friday";
        inputlabel6.style.color='red';
        break;
      case 6:
        inputlabel5.style.color='red';
        day = "Saturday";
    }
},1000)



const boxdate=document.querySelector(".boxdate h6")
const boxmonth=document.querySelector(".boxmonth h6")
const boxyear=document.querySelector(".boxyear h6")




setInterval(()=>{
    let date=new Date();
    let nowDate=date.getDate();
    let nowMonth=date.getMonth()+1;
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

//////


// day

const inputbutton=document.querySelector('input[type="radio"]:checked');
const message=document.querySelector("form p");

// inputbutton.addEventListener('click',()=>{
//     message.innerHTML='oKKK';
// })


let dayToday=new Date();

let day=dayToday.getDay();


switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

message.innerHTML=day;


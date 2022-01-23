
/**
 * Date /month/year
 */


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

/**
 * hour /minute/second
 */

const hour=document.querySelector(".boxhour h6")
const minute=document.querySelector(".boxminute h6")
const second=document.querySelector(".boxsecond h6")


setInterval(()=>{
    let date=new Date();
    let nowHour=zero(date.getHours()%12 ||12);
    let nowMinute=zero(date.getMinutes());
    let nowSceond=zero(date.getSeconds());
    hour.innerHTML=nowHour;
    minute.innerHTML=nowMinute;
    second.innerHTML=nowSceond;
},1000)


/**
 * all day
 */
const inputlabel1=document.querySelector('#sun');
const inputlabel2=document.querySelector('#mon');
const inputlabel3=document.querySelector('#tue');
const inputlabel4=document.querySelector('#wed');
const inputlabel5=document.querySelector('#thu');
const inputlabel6=document.querySelector('#fri');
const inputlabel7=document.querySelector('#sat');

setInterval(()=>{
  // const inputbutton=document.querySelector('input[type="radio"]:checked');
  
  let dayToday=new Date();
  let day=dayToday.getDay();

  colorText(day);
  color(day);
},1000)


/**
 * here is zeo function
 * @param {*} date 
 * @returns 
 */

function zero(date){
  if(date<10){
      return `0${date}`;
  }
  else{
      return date;
  }
};


/**
 * her is the today Function
 * @param {*} today 
 */
function color(today){
  const label=[inputlabel1,inputlabel2,inputlabel3,inputlabel4,inputlabel5,inputlabel6,inputlabel7];
  label[today].classList.add('active');
}
/**
 * colorText today Function
 * @param {*} today 
 */
function colorText(today){
  const label=[inputlabel1,inputlabel2,inputlabel3,inputlabel4,inputlabel5,inputlabel6,inputlabel7];
  label[today].style.color='red';
}

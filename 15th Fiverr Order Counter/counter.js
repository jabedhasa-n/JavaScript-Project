const fiverOrder=document.getElementById('fiver_order');
const counter=document.querySelector('.counter');

fiverOrder.addEventListener('submit',function (e){
  e.preventDefault();

  
  date=this.querySelector('input[type="date"]').value;
  time=this.querySelector('input[type="time"]').value;


  setInterval(()=>{
    let start_time=new Date();
    let end_time=new Date(date  + ' ' + time);
  
    let time_diff=Math.floor(Math.abs(end_time.getTime()-start_time.getTime()));
  
    let total_sec=Math.floor(time_diff/1000);
    let total_min=Math.floor(total_sec/60);
    let total_hours=Math.floor(total_min/60);
    let total_day=Math.floor(total_hours/24);
  
  
    let hours=total_hours-(total_day*24);
    let min=total_min-(total_day*24*60)-(hours*60);
    let sec=total_sec-(total_day*24*60*60)-(hours*60*60)-(min*60);
    
    // console.log(total_day  + ':' + hours + ':' + min + ':' +sec);
    counter.innerHTML=`${total_day} : ${hours} : ${min} : ${sec}`;
  
  },1000)

})

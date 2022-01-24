const fiverOrder=document.getElementById('fiver_order');

fiverOrder.addEventListener('submit',function (e){
  e.preventDefault();

  
  date=this.querySelector('input[type="date"]').value;
  time=this.querySelector('input[type="time"]').value;


  let start_time=new Date();
  let end_time=new Date(date  + ' ' + time);

  let time_diff=end_time.getTime()-start_time.getTime();
  console.log(time_diff);

  Math.floor(Math.abs(time_diff/10000));

  

})

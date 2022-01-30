
const number=document.querySelector('.number')
const result=document.querySelector('.result')

let cal_data=[]
let number_monitor='';
function valueGet(val){
    cal_data.push(val);
  number_monitor =cal_data.join('');

number.innerHTML=number_monitor;
result.innerHTML=0;

}

function final_result(){
    result.innerHTML=eval(number_monitor); 
}

function digit_clear(){
    cal_data.pop();
    number.innerHTML=cal_data.join('');
}

function all_clear(){
    cal_data=[]
    number.innerHTML=0;
    result.innerHTML=0;
}

const form=document.querySelector("#form");
const money=document.querySelector('#money');
const moneyConvert=document.querySelector('small');
const stableMoney=document.querySelector('#stableMoney');
const convertMoney=document.querySelector('#convertMoney');
const convert=document.querySelector('#convert');

form.addEventListener('submit',function(e){
	e.preventDefault();
	converter();
});

function converter(){
	if(money.value==''){
	moneyConvert.innerText='Please Type Your Payment'
	}
	else if(stableMoney.value=='USD' && convertMoney.value=='BD'){
	moneyConvert.innerText=`Your money is ${money.value*83.5}`
	}
	else if(stableMoney.value=='UK' && convertMoney.value=='BD'){
	moneyConvert.innerText=`Your money is ${money.value*102.2}`
	}
	else if(stableMoney.value=='BD' && convertMoney.value=='BD'){
	moneyConvert.innerText=`Your money is ${money.value}`
	}
	else if(stableMoney.value=='BD' && convertMoney.value=='USD'){
	moneyConvert.innerText=`Your money is ${(money.value/83.5).toFixed(2)}`
	}
	else if(stableMoney.value=='BD' && convertMoney.value=='UK'){
	moneyConvert.innerText=`Your money is ${(money.value/102.2).toFixed(2)}`;
	}
	else if(stableMoney.value=='USD' && convertMoney.value=='USD'){
	moneyConvert.innerText=`Your money is ${money.value}`
	}
	else if(stableMoney.value=='UK' && convertMoney.value=='UK'){
	moneyConvert.innerText=`Your money is ${money.value}`
	}
	else if(stableMoney.value=='USD' && convertMoney.value=='UK'){
	moneyConvert.innerText=`Your money is ${money.value*1.5}`
	}
	else if(stableMoney.value=='UK' && convertMoney.value=='USD'){
	moneyConvert.innerText=`Your money is ${money.value*.5}`
	}
}



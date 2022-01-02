const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password2');


password.addEventListener('keyup',()=>{
	const messages= password.parentElement;
	const message=messages.querySelector('small')
	let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	if(regularExpression.test(password.value)==false){
		message.innerText='username should be at least 6';

	}
	else if(password.value.length >16){
		message.innerText='username should be more 16';
	}
	else{
		message.innerText=' ';
		message.classList.add("success");
		message.style.border='1px solid red';
	}
})

form.addEventListener('submit',function(e){
	e.preventDefault();
	checkValidation();
});


function checkValidation(){
	const usernameValue=username.value;
	const mailVlue=email.value;
	const passwordValue=password.value;
	const passwordtwoValue=passwordtwo.value;
	if(usernameValue === '') {
	valError(username, 'Username cannot be blank');
	} 
	else {
		valsucc(username);     
	};

	if(mailVlue==''){
		valError(email,'Email cann\'t be blank')
	}
	else if(!isEmail(mailVlue)){
		valError(email,'Not a valid email')
	}
	else{
		valsucc(email);
	};


	if(passwordValue==''){
		valError(password,'password cann\'t be blank')
	}
	else{
		valsucc(password);
	};

	if(passwordtwoValue==''){
		valError(passwordtwo,'password cann\'t be blank')
	}
	else if(passwordValue!=passwordtwoValue){
		valError(passwordtwo,'password does not match')
	}
	else{
		valsucc(passwordtwo);
	};

}
function valError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.classList.add("error");
	small.innerText = message;
}

function valsucc(input) {
	const formControl = input.parentElement;
	formControl.classList.add("success");
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
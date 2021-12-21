

// # Create an email pattern 

let userEmil="sakivai231@gmail.com";

let pattern=/^[a-z0-9_\.-]*@[a-z0-9\-]*\.[a-z]{2,5}$/;

console.log(pattern.test(userEmil));

// # Create a Bangladeshi phone number pattern

let phoneNumber="01793534981";
pattern=/^(01|\+08801)[0-9]{9}$/;
console.log(pattern.test(phoneNumber));


// # Create a password pattern 

let password="jabeweb2021@!!!";

pattern=/[a-zA-Z0-9@!#\.]*/
console.log(pattern.test(password));


// # Create a zipcode pattern

let zipcode="3724";

pattern=/[0-9]{4,8}/;
console.log(pattern.test(zipcode));





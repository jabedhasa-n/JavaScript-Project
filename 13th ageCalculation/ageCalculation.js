const name = document.querySelector("#name");
const number = document.querySelector("#number");
const submit = document.querySelector("#submit");
const text = document.querySelector(".form-footer");

// name.addEventListener("keyup", () => {
//   text.innerHTML = name.value;
// });

submit.addEventListener("click", () => {
  if (name.value == "" || number.value == "") {
    text.innerHTML = "All fields are required";
  } else {
    text.innerHTML = agecall(name.value, number.value);
    name.value = "";
    number.value = "";
  }
});

// let patter = /^[a-z0-9]{2,5}[A-Z]{1,}$/;
// name.addEventListener("keyup", () => {
//   if (patter.test(name.value) == false) {
//     text.innerHTML = "you have to write a-z or 0-9";
//   } else {
//     text.innerHTML = "Thank you guys";
//   }
// });


function agecall(name, year) {
  let date = new Date();
  age = date.getFullYear() - year;
  return `Hi ${name} ,Your Age is ${age}`;
}
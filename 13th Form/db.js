const name = document.querySelector("#name");
const number = document.querySelector("#number");
const password = document.querySelector("#password");
const password = document.querySelector("#password-check");
const submit = document.querySelector("#submit");
const text = document.querySelector(".form-footer");

// name.addEventListener("keyup", () => {
//   text.innerHTML = name.value;
// });

submit.addEventListener("click", () => {
  if (name.value == "" || number.value == "" || password.value == "") {
    text.innerHTML = "All fields are required";
  } else {
    text.innerHTML = "Thank You";
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

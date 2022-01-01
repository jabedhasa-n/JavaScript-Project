const button = document.querySelector(".card-footer");
const text = document.querySelector("#text");
const number = document.querySelector("#number");
const submit = document.querySelector("#submit-id");

// submit.addEventListener("click", () => {

// });

submit.addEventListener("click", () => {
  button.innerHTML = agecall(text.value, number.value);
  text.value = "";
  number.value = "";
});

function agecall(name, year) {
  let date = new Date();
  age = date.getFullYear() - year;
  return `Hi ${name} ,your age is ${age}`;
}

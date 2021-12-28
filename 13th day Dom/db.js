const button = document.querySelector(".button .button-click");

// button.addEventListener("click", function () {
//   alert();
// });

// button.addEventListener("dblclick", function () {
//   alert();
// });
// button.addEventListener("mouseenter", function () {
//   alert();
// });
// button.addEventListener("mouseleave", function () {
//   alert();
// });
// button.addEventListener("mousedown", function () {
//   alert();
// });

// button.addEventListener("mouseup", function () {
//   alert();
// });

// button.addEventListener("click", () => {
//   button.nextElementSibling.innerHTML = "We love Js";
// });
button.addEventListener("mouseover", () => {
  button.nextElementSibling.innerHTML = "We love Js";
});

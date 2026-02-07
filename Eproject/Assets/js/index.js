const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! 👍");
  form.reset();
});

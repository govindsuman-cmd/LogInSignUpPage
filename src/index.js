const header = document.getElementById("heading");
const button = document.getElementById("loginBtn");
const nameField = document.getElementById("name");
const signupBtn = document.getElementById("changeSide");
const hip = document.getElementById("swtich");

signupBtn.onclick = function (event) {
  header.innerHTML = "SignUp";
  nameField.style.display = "block";
  event.preventDefault();
};
button.onclick = function (event) {
  header.innerHTML = "Login";
  nameField.style.display = "none";
  event.preventDefault();
};

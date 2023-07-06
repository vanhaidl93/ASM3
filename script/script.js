"use strict";
const personalForm = document.querySelector(".personal-form");
const personalInfo = document.querySelector(".personal-info");
const submitButton = document.querySelector(".btn");

// Function checkmail
const checkEmail = function (email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};
// EVENT FORM.
// OPEN FORM: BUTTON
submitButton.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value;
  if (checkEmail(emailValue)) {
    personalInfo.classList.remove("hidden");
    personalForm.classList.add("hidden");
  } else {
    alert("Nhập lại, sai cú pháp");
  }
});
// CLOSE FORM: ESC KEYBOARD
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    personalInfo.classList.add("hidden");
    personalForm.classList.remove("hidden");
  }
});
// FUNCTION SHOW/HIDE JOB-ITEMS
const contentView = document.querySelectorAll(".exp-content");
const buttonView = document.querySelectorAll(".btn-viewmore");

console.log(buttonView);
console.log(contentView);

const viewMore = function (i) {
  contentView[i].classList.remove("hidden");
  buttonView[i].classList.remove("hidden");
  buttonView[i].textContent = "↑ VIEW LESS";
};

const viewLess = function (i) {
  contentView[i].classList.add("hidden");
  buttonView[i].classList.add("hidden");
  buttonView[i].textContent = "↓ VIEW MORE";
};

for (let i = 0; i < contentView.length; i++) {
  buttonView[i].addEventListener("click", function () {
    if (contentView[i].classList.contains("hidden")) {
      viewMore(i);
    } else {
      viewLess(i);
    }
  });
}

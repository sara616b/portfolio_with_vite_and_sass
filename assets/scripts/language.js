"use strict";
window.addEventListener("DOMContentLoaded", languageStart);

function languageStart() {
  console.log("start");
  const urlParams = new URLSearchParams(window.location.search);
  const la = urlParams.get("la");
  const languageSwitch = document.querySelector("[data-language]");
  let currentLanguage;
  if (la === null) {
    currentLanguage = languageSwitch.getAttribute("data-language");
  } else if (la === "en") {
    currentLanguage = "english";
    languageSwitch.setAttribute("data-language", "english");
    languageSwitch.innerHTML = "Dansk";
  } else if (la === "da") {
    currentLanguage = "danish";
    languageSwitch.setAttribute("data-language", "danish");
    languageSwitch.innerHTML = "English";
  }
  checkLanguage(currentLanguage);
  languageSwitch.addEventListener("click", () => {
    if (currentLanguage === "english") {
      currentLanguage = "danish";
      languageSwitch.setAttribute("data-language", "danish");
      languageSwitch.innerHTML = "English";
      checkLanguage(currentLanguage);
    } else if (currentLanguage === "danish") {
      currentLanguage = "english";
      languageSwitch.setAttribute("data-language", "english");
      languageSwitch.innerHTML = "Dansk";
      checkLanguage(currentLanguage);
    }
  });
}
function checkLanguage(currentLanguage) {
  console.log(currentLanguage);

  if (currentLanguage === "english") {
    document.querySelectorAll(".danish").forEach((text) => {
      text.classList.add("hidetext");
    });
    document.querySelectorAll(".english").forEach((text) => {
      text.classList.remove("hidetext");
    });
  } else if (currentLanguage === "danish") {
    document.querySelectorAll(".english").forEach((text) => {
      text.classList.add("hidetext");
    });
    document.querySelectorAll(".danish").forEach((text) => {
      text.classList.remove("hidetext");
    });
  }
}

function checkLanguage(currentLanguage) {
  console.log(currentLanguage);

  if (currentLanguage === "english") {
    document.querySelectorAll(".danish").forEach((text) => {
      text.classList.add("hidetext");
    });
    document.querySelectorAll(".english").forEach((text) => {
      text.classList.remove("hidetext");
    });
  } else if (currentLanguage === "danish") {
    document.querySelectorAll(".english").forEach((text) => {
      text.classList.add("hidetext");
    });
    document.querySelectorAll(".danish").forEach((text) => {
      text.classList.remove("hidetext");
    });
  }
}

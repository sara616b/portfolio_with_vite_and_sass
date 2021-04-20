"use strict";
window.addEventListener("DOMContentLoaded", start);

//start when page is loaded
function start() {
  console.log("start");
  document.querySelectorAll(".project .content").forEach((project) => {
    project.addEventListener("click", openDetails);
  });
}

function openDetails() {
  const languageSwitch = document.querySelector("[data-language]");
  let currentLanguage = languageSwitch.getAttribute("data-language");
  let languageParam = currentLanguage.substring(0, 2);
  window.location.href =
    "/projects/detail.html?id=" + this.id + "&la=" + languageParam;
}

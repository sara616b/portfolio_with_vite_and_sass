"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#burgerhidden").classList.toggle("hidden");

  document.querySelector("#burgermenu").innerHTML = "☰";

  if (document.querySelector("#burgerhidden").classList.contains("hidden")) {
    document.querySelector("#burgermenu").innerHTML = "☰";
  } else {
    document.querySelector("#burgermenu").innerHTML = "✖";
  }
}

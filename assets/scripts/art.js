"use strict";
window.addEventListener("DOMContentLoaded", start);
let artArray = [
  { imgSrc: "../assets/images/art/flower.GIF", header: "Flower 2d animation" },
  {
    imgSrc: "../assets/images/art/train.jpg",
    header: "Landscape painting with train tracks",
  },
  { imgSrc: "../assets/images/art/vase.jpg", header: "Vase illustration" },
  {
    imgSrc: "../assets/images/art/branch.jpg",
    header: "Branch in forest illustration",
  },
  { imgSrc: "../assets/images/art/swift.jpg", header: "Portrait illustration" },
  { imgSrc: "../assets/images/art/shizu.jpg", header: "Dog illustration" },
  { imgSrc: "../assets/images/art/bridge.jpg", header: "Bridge ink drawing" },
  { imgSrc: "../assets/images/art/bench.jpeg", header: "Bench ink drawing" },
  { imgSrc: "../assets/images/art/oro.jpeg", header: "Orø sign ink drawing" },
  { imgSrc: "../assets/images/art/kaz.jpg", header: "Kaz Brekker fanart" },
  { imgSrc: "../assets/images/art/self.jpg", header: "Portrait illustration" },
  {
    imgSrc: "../assets/images/art/puppy.jpg",
    header: "Puppy charcoal drawing",
  },
  { imgSrc: "../assets/images/art/woman-1.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/lisa.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/aniston.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/emma.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/watson.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/girl.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/woman-2.jpg", header: "Charcoal portrait" },
  {
    imgSrc: "../assets/images/art/tree.jpeg",
    header: "Colored pencil drawing",
  },
  {
    imgSrc: "../assets/images/art/forest-floor.jpeg",
    header: "Forest floor ink drawing",
  },
  { imgSrc: "../assets/images/art/plants.jpeg", header: "Bench ink drawing" },
  { imgSrc: "../assets/images/art/path.jpeg", header: "Path ink drawing" },
  {
    imgSrc: "../assets/images/art/perspective.jpeg",
    header: "Perspective drawing",
  },
  { imgSrc: "../assets/images/art/wilde.png", header: "Oscar Wilde quote" },
  { imgSrc: "../assets/images/art/flowery-pink.jpg", header: "Floral pattern" },
  { imgSrc: "../assets/images/art/blue-pattern.jpg", header: "Blue doodle" },
  { imgSrc: "../assets/images/art/lin.jpg", header: "Charcoal portrait" },
  { imgSrc: "../assets/images/art/rose.jpg", header: "Rose drawing" },
];
let artArrayDanish = [
  { imgSrc: "../assets/images/art/flower.GIF", header: "Blomst 2d animation" },
  {
    imgSrc: "../assets/images/art/train.jpg",
    header: "Landskabsillustraion med togspor",
  },
  { imgSrc: "../assets/images/art/vase.jpg", header: "Vase illustration" },
  {
    imgSrc: "../assets/images/art/branch.jpg",
    header: "Gren i skoven illustration",
  },
  { imgSrc: "../assets/images/art/swift.jpg", header: "Portræt illustration" },
  { imgSrc: "../assets/images/art/shizu.jpg", header: "Hund illustration" },
  { imgSrc: "../assets/images/art/bridge.jpg", header: "Bro blæktegning" },
  { imgSrc: "../assets/images/art/bench.jpeg", header: "Bænk blæktegning" },
  { imgSrc: "../assets/images/art/oro.jpeg", header: "Orø skilt blæktegning" },
  { imgSrc: "../assets/images/art/kaz.jpg", header: "Kaz Brekker fanart" },
  { imgSrc: "../assets/images/art/self.jpg", header: "Portræt illustration" },
  {
    imgSrc: "../assets/images/art/puppy.jpg",
    header: "Hvalp kultegning",
  },
  { imgSrc: "../assets/images/art/woman-1.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/lisa.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/aniston.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/emma.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/watson.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/girl.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/woman-2.jpg", header: "Kul portræt" },
  {
    imgSrc: "../assets/images/art/tree.jpeg",
    header: "Farveblyanttegning",
  },
  {
    imgSrc: "../assets/images/art/forest-floor.jpeg",
    header: "Skovbund blæktegning",
  },
  { imgSrc: "../assets/images/art/plants.jpeg", header: "Bænk blæktegning" },
  { imgSrc: "../assets/images/art/path.jpeg", header: "Sti blæktegning" },
  {
    imgSrc: "../assets/images/art/perspective.jpeg",
    header: "Perspektiv tegning",
  },
  { imgSrc: "../assets/images/art/wilde.png", header: "Oscar Wilde citat" },
  {
    imgSrc: "../assets/images/art/flowery-pink.jpg",
    header: "Blomstermønster",
  },
  { imgSrc: "../assets/images/art/blue-pattern.jpg", header: "Blå doodle" },
  { imgSrc: "../assets/images/art/lin.jpg", header: "Kul portræt" },
  { imgSrc: "../assets/images/art/rose.jpg", header: "Rose tegning" },
];

function start() {
  console.log("start");

  gsap.registerPlugin(ScrollTrigger);

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const la = urlParams.get("la");
  console.log(la);
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
      showArt();
      checkLanguage(currentLanguage);
    } else if (currentLanguage === "danish") {
      currentLanguage = "english";
      languageSwitch.setAttribute("data-language", "english");
      languageSwitch.innerHTML = "Dansk";
      showArt();
      checkLanguage(currentLanguage);
    }
  });

  showArt();
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
function showArt() {
  console.log("Show Projects");
  document.querySelector("main").innerHTML = "";

  const currentLanguage = document
    .querySelector("[data-language]")
    .getAttribute("data-language");

  if (currentLanguage === "english") {
    artArray.forEach((project) => {
      const clone = document.createElement("div");
      clone.classList.add("artwork");
      const content = document.createElement("div");
      content.classList.add("content");
      clone.appendChild(content);
      const imagediv = document.createElement("div");
      imagediv.classList.add("image");
      clone.querySelector(".content").appendChild(imagediv);
      const header = document.createElement("h2");
      clone.querySelector(".content").appendChild(header);

      // const clone = document.querySelector("template").cloneNode(true).content;
      clone.querySelector(".image").style.backgroundImage =
        "url(" + project.imgSrc + ")";
      clone.querySelector("h2").innerHTML += project.header;

      gsap.from(clone, {
        xPercent: -10,
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "ease-in-out",
        scrollTrigger: {
          trigger: clone,
          toggleActions: "restart none none reset",
        },
      });
      document.querySelector("main").appendChild(clone);
    });
  } else if (currentLanguage === "danish") {
    artArrayDanish.forEach((project) => {
      const clone = document.createElement("div");
      clone.classList.add("artwork");
      const content = document.createElement("div");
      content.classList.add("content");
      clone.appendChild(content);
      const imagediv = document.createElement("div");
      imagediv.classList.add("image");
      clone.querySelector(".content").appendChild(imagediv);
      const header = document.createElement("h2");
      clone.querySelector(".content").appendChild(header);

      // const clone = document.querySelector("template").cloneNode(true).content;
      clone.querySelector(".image").style.backgroundImage =
        "url(" + project.imgSrc + ")";
      clone.querySelector("h2").innerHTML += project.header;

      gsap.from(clone, {
        xPercent: -10,
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "ease-in-out",
        scrollTrigger: {
          trigger: clone,
          toggleActions: "restart none none reset",
        },
      });
      document.querySelector("main").appendChild(clone);
    });
  }
}

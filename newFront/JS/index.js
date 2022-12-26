let btnTheme = document.querySelector(".btn-theme");
let btnImg = document.querySelector(".btn-theme-img");
let body = document.querySelector(".light-theme");
let logo = document.querySelector(".elem-logo");
let countPlace = document.querySelector(".link-counter-text");
let counter = 0;

//Фича конечно топ, но при нажатии "ОК"(когда имя не введено) выплывает: "Alloha !"
logo.onclick = function () {
  counter++;
  let name = prompt(`Hello bro!
  Whats your name?`);
  if (name !== null) {
    alert(`Alloha ${name}!`);
  } else {
    alert("Hmmm...");
  }
  countPlace.textContent = counter;
};

//изменение темы фронта
btnTheme.onclick = function () {
  body.classList.toggle("dark-theme"); //Обрати внимаение, что при изменении фона, здесь не нужно указывать точку.
  body.classList.toggle("light-theme");
  btnImg.classList.toggle("dark-theme");
};
/* ---------------------------------------------*/
//создание элементов-подсказок;
let toolsButton = querySelector(".example-btn");
let toolsText = querySelector(".tools-text");

toolsButton.onclick = function () {
  toolsText.textContent = toolsButton.dataset.toolsText;
};

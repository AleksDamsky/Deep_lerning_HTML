// let text = document.querySelector(".block-for-text");

// text.textContent = "lol";

let logo = document.querySelector(".elem-logo");
// let logoActive = document.querySelector(".elem-logo-active");

//Фича конечно топ, но при нажатии "ОК"(когда имя не введено) выплывает: "Alloha !"
logo.onclick = function () {
  let name = prompt(`Hello bro!
  Whats your name?`);
  if (name !== null) {
    alert(`Alloha ${name}!`);
  } else {
    alert("Hmmm...");
  }
};

//функия, которая позволяет менять цвет при нажати...(это не так. Просто в css есть псевдокласс :active);
// logoActive.onclick = function () {
//   logoActive.classList.toggle(".elem-logo-change");
// };
//ладно, при активации этих строк не работает код выше. Их нужно соеденить.

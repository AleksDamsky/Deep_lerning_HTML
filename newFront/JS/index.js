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
// let toolsButton = querySelector(".example-btn");
// let toolsText = querySelector(".tools-text");

// toolsButton.onclick = function () {
//   toolsText.textContent = toolsButton.dataset.toolsText;
// };

//Задачи для мозга и понимания
function squareSum(numbers) {
  let arr = [];
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i] ** 2;
    arr.push(a);
    newArr = arr.reduce((v, z) => v + z);
  }

  console.log(newArr);
}
squareSum([1, 2, 2]);
squareSum([0, 3, 4, 5]);
/*---------------------------------------------------------------------*/
function areYouPlayingBanjo(strName) {
  if (strName[0] === "r" || strName[0] === "R") {
    console.log(`${strName} play banjo`);
  } else {
    console.log(`${strName} does not playing banjo`);
  }
}

areYouPlayingBanjo("Robert");
areYouPlayingBanjo("sam");

/*---------------------------------------------------------------------*/
function DNAtoRNA(dna) {
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      //если есть индекс, который равен "T", то вычленить его - каким методом? pop(), shift(), slice() || splice()
    }
  }
}

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
// let arr = [0, 1, 2, 3, 4, 5, 6];
// console.log(arr.slice(0, 3));
// console.log(arr);
/* ---------------------------------------------*/
//создание элементов-подсказок;
// let toolsButton = querySelector(".example-btn");
// let toolsText = querySelector(".tools-text");

// toolsButton.onclick = function () {
//   toolsText.textContent = toolsButton.dataset.toolsText;
// };

//Задачи для мозга и понимания
// function squareSum(numbers) {
//   let arr = [];
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let a = numbers[i] ** 2;
//     arr.push(a);
//     newArr = arr.reduce((v, z) => v + z);
//   }

//   console.log(newArr);
// }
// squareSum([1, 2, 2]);
// squareSum([0, 3, 4, 5]);
// /*---------------------------------------------------------------------*/
// function areYouPlayingBanjo(strName) {
//   if (strName[0] === "r" || strName[0] === "R") {
//     console.log(`${strName} play banjo`);
//   } else {
//     console.log(`${strName} does not playing banjo`);
//   }
// }

// areYouPlayingBanjo("Robert");
// areYouPlayingBanjo("sam");

/*---------------------------------------------------------------------*/
//my dicide
//15 минут на решение своим способом
// function DNAtoRNA(dna) {
//   let arr = dna.split("");
//   let result = [];
//   for (let i = 0; i < dna.length; ) {
//     result.push(dna);
//     // result.toString().split(" ");
//   }
//   console.log(result);
// }
// DNAtoRNA("CROT");

//dicide other programmer
//1.
// function DNAtoRNA(dna) {
//   console.log(dna.replace(/T/g, "U"));
// }
// DNAtoRNA("CROT");
// // 2.
// function DNAtoRNA2(dna) {
//   console.log(dna.split("T").join("U"));
// }
// DNAtoRNA2("CROT");
// function setAlarm(empl, vac) {
//   switch ((empl, vac)) {
//     case empl === true && vac === true:
//       console.log(false);
//       break;
//     case empl === false && vac === true:
//       console.log(false);
//       break;
//     case empl === false && vac === false:
//       console.log(false);
//       break;
//     case empl === true && vac === false: //<< false выдает...
//       console.log(true);
//       break;
//   }
// }

// setAlarm(true, true);
// ++++
// function setAlarm(employed, vacation) {
//   switch ((employed, vacation)) {
//     case employed == true && vacation == true:
//       return `Should be ${false}.`;
//       break;
//     case employed == false && vacation == true:
//       return false, `Should be ${false}.`;
//       break;
//     case employed == false && vacation == false:
//       return false, `Should be ${false}.`;
//       break;
//     case employed == true && vacation == false:
//       return true, `Should be ${true}.`;
//       break;
//   }
// }

// setAlarm(true, true);
// setAlarm(false, true);
// setAlarm(false, false);

//other dicide

function setAlarm(e, v) {
  console.log(e && !v);
}

setAlarm(false, false);

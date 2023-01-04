/*---------------------------------------Задача 1*/
// //мы создаем функцию, которая принимает в себя массив
// function parseArray(array) {
//   //мы создаем переменную, которая будет содержать в себе массив, который мый отсоритровали с помощью метода .sort((парметры) => что с ними нужно сделать)
//   let newArray = array.sort((a, b) => a - b);

//   //далее мы преобразуем получившиеся числа в строки и тоже запишем их в переменную и выведем, как массив
//   let strArray = newArray.join(" ");
//   console.log(strArray);

//   //затем выводим из массива первый элемент
//   console.log(`"${newArray[0]}" - Наименьшее число`);

//   //потом выводи с помощью метода .pop() посдедний элемени массива. .pop - метод, который вырезает элемент с конца массива и выводит его в консоль
//   console.log(`"${newArray.pop()}" - Наибольшее число`);
// }
// parseArray([25, 236, 888, 0, -2343, -4]);
// parseArray([34, 27527, 4, 456, -88, -23]);

// /* Задача № 2------------------------------------*/

// //Нужно вывести true or false, если есть или отсутсвует значение введенное.

// //Создал функцию, которая принимает строку и дубликат,
// // function getDublicate(str, dubl) {
// //   let arrOfStr = [];
// //   arrOfStr.push(str);

// //   for (let i = 0; i <= arrOfStr.lenght; i++) {
// //     let result = arrOfStr[i];
// //     if (str.indexOf(dubl) !== -1) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// // }

// // getDublicate("some body one", "ne");
// /*Нужно зайти на ВЕб мозиллу в часть с методами для строки*/

// /*Задача № 4-------------------------------------*/
// // Попробую из головы решить задачу с физз базз

// // Это функция, которая не перебирает массив...
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 2 === 0) {
//       console.log("Fizz");
//     }
//   }
// }

// fizzBuzz(2);

/*---------------------------------------Задача 5*/

//Тут получилась функция, которая просто переворачивает строку...
// function reverseText(text) {
//   let arr = text.split(" ").reverse().join(" ");
//   // let arrReverse = arr.reverse(arr[0]);
//   console.log(arr);
//   // console.log(arrReverse);
// }

// reverseText("This is an example!");

// function revWords(text) {
//   //поделили на элементы
//   let arr = text.split(" ");
//   console.log(arr);

//   let arr2 = arr.shift();

//   console.log(arr2);
// }

// revWords("This is an example!");

//это называется "слово задом наперед"

// function getRevTxt(str) {
//   let newStr = "";

//   for (let i = 0; i <= str.length; i++) {
//     newStr += str([str.length - 1] - i);
//   }
//   return newStr;
// }

// getRevTxt("This is an example!");

/*Короче, тут нужно сделать через перебор обращение к каждому элементу массива. После обращения задать ему возможность стать задом наперед*/
// function getRevStr(txt) {
//   let arr = txt.split(" ");
//   console.log(arr);
//   arr.forEach((elem) => {
//     console.log(elem);
//     let arr2 = [];
//     arr2.push(elem);
//     console.log(arr2);
//   });
// }

// getRevStr("This is an example!");

// function getRev(txt) {
//   let arr = txt.split(" ");
//   // console.log(arr);

//   let arr2 = [];
//   for (let i = 0; i <= arr.length; i++) {
//     return txt
//       .split(" ")
//       .map((word) => word.split("").reverse().join(""))
//       .join(" ");
//   }
// }

// getRev("This is an example!");

// function newArr(text) {
//   let arr = text.split("").reverse().join("");
//   console.log(arr);
// }

// newArr("This is an example!");

/*Задача 6---------------------------------------*/

//Задумка с фильтром была правильной
// function filterList(l) {
//   let filter = l.filter((elem) => elem === Number);
//   console.log(filter);
// }

// filterList([1, 2, "lol", 3, "sam", "kek"]);

// function filterList(arr) {
//   let a = JSON.stringify(arr.filter((item) => typeof item === "number"));
//   console.log(a);
// }

// filterList([1, 2, "lol", 3, "sam", "kek"]);

// //Надо разобрать, как это так происходит...Если с фильтром и айтемом все ясно, то вот причем тут джейсон - хз
// let a = JSON.stringify(arr.filter((item) => typeof item === "number"));

// let arr = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// function alphabetPosition(text) {
//   let a = text.split("");
//   console.log(a);
// }

// alphabetPosition("The sunset sets at twelve o'clock");

//продолжаем решать фундаментальные задачки

/*----------------------------------------------------------*/
//n - это число, на которое должны делиться следующие выводимые числа; x - это то число, указывающее количество цифр, которое нужно добавить в массив.

// function countBy(n, x) {
//   let z = [];

//   for (; n <= x; n++) {
//     if (n % 2 === 0) {
//       z.push(n);
//     }
//   }
//   console.log(z);
//цикл, позволяющий заполнить массив от n до x
// // for (let i = 0; i < x; i++) {
//   if (i % n === 0) {
//     z.push(i);
//   }
// }
// }
// countBy(1, 5);

// function countBy2(a, b) {
//   let z = [];

//   for (; a <= b; a++) {
//     z.push(a);
//   }
//   console.log(z);
// }

// countBy2(1, 10);
/*----------------------------------------------------------*/

//В следующей задаче нужно сделать функцию, которая ищет в массиве нужный элемент и выводить его индекс

// function findElem(arr, elem) {
//   // let z = arr.find((arr, index) => elem);
//   let z = arr.indexOf(elem, 0);

//   console.log(`Вот индекс искомого элемента: ${z}`);
// }

// findElem(
//   ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"],
//   "junk"
// );

/*---------------------------------------------------------*/
//Создать функцию, которая принимает массив с числами и выводи сумму тех, которые не являются первым и последним элементом массива

//мой способ решения через перебор
// function sumArray(array) {
//   let newArray = []; //создал новый массив;

//   newArray = array.sort((a, b) => a - b); //отсортировал в порядке возрастания элекменты в порядке возрастания;
//   console.log(newArray); // попробовал вывести;

//   for (let i = 0; i <= newArray.length; i++) {
//     if (i !== newArray[1] && i !== newArray[-1]) {
//       //неправильная проверка элементов
//       let sum = newArray.reduce((a, b) => a + b);
//       console.log(sum);
//     }
//   }
// }

// sumArray([6, 2, 35, 1, 6]);

// //помогли с решением

// function getSum(array) {
//   let newArr = array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((a, b) => a + b, 0);

//   console.log(newArr);
// }

// getSum([4, 2, 6, 2, 2, 6, 75, 92]);

// // мой гибрид

// function myFunc(array) {
//   let newMassiv = array.sort((a, b) => a - b);
//   console.log(newMassiv); //[2, 2, 2, 4, 6, 6, 75, 92]

//   for(let i = 0; i <= newMassiv.length; i++){

//   }
// }

// myFunc([4, 2, 6, 2, 2, 6, 75, 92]);

// function getSum(array) {
//   let newAr = array.reduce((a, b) => a + b);
//   console.log("Сумма элементов массива: " + newAr);
// }

// getSum([3, 5, 4]);

// //решение на codeWars
// function betterThanAverage(classPoints, yourPoints) {
//   return (
//     yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
//   );
// }

//Задача - необходимо удалить каждый второй элемент массива и вывести его

// function removEveryOther(array) {
//   let newAr = array.forEach((elem) => {
//     array.slice(2, 0);
//   });
//   console.log(newAr);
// }

// removEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// removEveryOther(["Hello", "Goodbye", "Hello Again"]);

// function removEveryOther(array) {
//   let newAr;
//   console.log(newAr);
// }

// removEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// removEveryOther(["Hello", "Goodbye", "Hello Again"]);

//Задача - выводить последующий цвет после введенного цвета.
//>>"red"
//>>"yellow"

// function updateLight(current) {
//   if (current === "red") {
//     console.log("yellow");
//   } else if (current === "yellow") {
//     console.log("green");
//   } else if (current === "green") {
//     console.log("red");
//   }
// }

// updateLight("green");

// --------->

// function updateLight(current) {
//   let a =
//     current === "yellow" ? "red" : current === "green" ? "yellow" : "green";
//   console.log(a);
// }

// updateLight("red");

// --------->

// const reverseSeq = (n) => {
//   let a = n.sort((a, b) => b - a);

//   console.log(a);
// };

// reverseSeq([4, 5, 1, 3, 2]);
//---------->
// const reverseSeq = (n) => {
//   let a = [];
//   while (n >= 0) {
//     a.push(n--);
//   }
//   console.log(a);
// };

// reverseSeq(5);

//----------->

// function feast(beast, dish) {
//   let bi = beast.split("");
//   let di = dish.split("");

//   if (bi[0] === di[0]) {
//     console.log(true); //return
//   } else {
//     console.log(false); //return
//   }
// }

// feast("lol", "loliks");

// // let a = {
// //   if (d === 1) {
// //     console.log("hello");
// //   }
// // }

// function solution(str) {
//   let a = str.split("").reverse().join("");

//   console.log(a);
// }
// solution("word");
// solution("some");
// // -----------------------------------------------------------
// var search = function (nums, target) {
//   let a = nums.indexOf(target);
//   console.log(a);
// };

// search([-1, 9, 3, 6, 7, 2, 32, 55, 62, 0, 8], 51);
// search([-1, 9, 3, 6, 7, 2, 32, 55, 62, 0, 8], 62);
// // -----------------------------------------------------------
// let badNum = (num, bad) => {
//   var a = bad < 5;
//   switch(num, bad){
//       case num > 5: return true;
//       break;
//       case num === a: return false;
//       break;
//   }
// }

// badNum(5, 4);
// let badNum = (num, bad) => {
//   if (num >= 5) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// badNum(1, 5);

// let replace = (str) => {
//   let result = str.replace(/S/gi, "5"); //
//   console.log(result);
// };

// replace("lol");

// let request = prompt(`Какой официальное название у JavaScript?`);

// if (request == "ECMAScript") {
//   console.log("Все верно!");
// } else {
//   console.log(`Вы не знаете?`);
// }

// let getRequest = () => {
//   let req = prompt(`Какой официальное название у JavaScript?`);
//   if (req === "ECMAScript") {
//     alert(`Верно!`);
//   } else {
//     console.log(`Вы не знаете ECMAScript?`);
//   }
// };

// getRequest();

// let request = prompt(`Need you number?`);

// if (request >= 0) {
//   alert(+request);
// } else if (typeof request === String) {
//   alert("...");
// } else if (request == 0) {
//   alert(0);
// } else {
//   alert(-1);
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result = a + b < 4 ? "Мало" : `Много`;

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let meassage2 = login == `Emploeis` ? message2 = `Hi` :
// login == `director`? message2 = 'Hello There' : login == `` ? message2 = "No login" :
// meassage2 = '';

// При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 0; i < 10; ++i) {
//   let res = i % 2 == 0 ? console.log(i) : false;
//   console.log(res);
// }

// let input = +prompt(`Введите число больше 100`, `x > 100`);

// while (input) {
//   if (input == null) {
//     break;
//   } else if (input <= 100) {
//     return input;
//   } else if (input > 100) {
//     alert(`Круть!`);
//   }
//   break;
// }
// let input;

// do {
//   input = +prompt(`Need your number`, `x > 100`);
// } while (input <= 100 && input);

// let res;

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   res += i;
// }
// console.log(res);

let n = 10,
  a;

point: for (let i = 0; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (j % i == 0) continue point;
    a += j;
  }
  console.log(a);
}

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

function filterList(arr) {
  let a = JSON.stringify(arr.filter((item) => typeof item === "number"));
  console.log(a);
}

filterList([1, 2, "lol", 3, "sam", "kek"]);

//Надо разобрать, как это так происходит...Если с фильтром и айтемом все ясно, то вот причем тут джейсон - хз
let a = JSON.stringify(arr.filter((item) => typeof item === "number"));

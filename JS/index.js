// function multiply(a, b) {
//   let c = a * b;
//   console.log(c);
// }

// multiply(2, 3);

// Получилась функция, которая принимает массив и сортирует его от самого меньшего до самого большего.
function parseArray(array) {
  let newArray = array.sort((a, b) => a - b);
  //   console.log(newArray);

  let strArray = newArray.join(" ");
  console.log(strArray);

  let shiftArr = strArray.shift();
  console.log(shiftArr);
}
parseArray([2, 5, 6, 12, -23]);

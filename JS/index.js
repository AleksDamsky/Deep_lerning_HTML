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

  console.log(`"${newArray[0]}" - Наименьшее число`);
  console.log(`"${newArray.pop()}" - Наибольшее число`);
}
parseArray([25, 236, 888, 0, -2343, -4]);
parseArray([34, 27527, 4, 456, -88, -23]);

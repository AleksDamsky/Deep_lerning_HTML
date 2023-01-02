let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11];
console.log(a);

let b = a.reduce((a, b) => b - a);
console.log(b);

let c = a.sort((a, b) => b - a);
console.log(c);

let ar = ["rules", "for", "arr"];
console.log(ar);

function getElem(elem, index, array) {
  let z = "lol";
  return elem === z;
}

console.log(ar.find(getElem));

let t = 9;
let num = a.sort((a, b) => a - b).indexOf(t); //два метода потому что мы сначала массив развернули. А ща перевернули обратно и нашли нужный элемент
console.log(num);

let j = ar.join("-");
console.log(j);

let r = ar[0].replace("lol");
console.log(r);
console.log(ar);

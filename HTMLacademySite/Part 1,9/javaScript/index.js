// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function getElement(massiv) {
  let a = [];
  for (let i = 0; i <= massiv.length; i++) {
    // if (i % 1 === i) {
    //   a.push(i);
    //   return a;
    // } else {
    //   console.log("error");
    // }
    alert(massiv.length);
    break;
  }
}

getElement([1, 2, "a", "b"]);

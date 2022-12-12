//создаем переменную, для пользования хослтом
const holst = document.getElementById("game");
//создаем переменную для того, чтобы показать, какой вид игры у нас будет
const render = canvas.getContext("2d");
//создадим переменную для указания размера квадратиков сетки
const grid = 32;
//Создадим переменную с пустым массивом, куда будем записывать последовательность появления фигур на экране
let arr = [];

//создадаим массив с двумерным изображением для того, чтобы следить за изменениями. Размер поля будет 10 на 20 и еще несколько клеток вне поля видимости
let arr2D = [];

//мы сделаем заполнение <arr2D> клетками для игры
//этот цикл будет формировать строки
for (let row = -2; row <= 20; row++) {
  arr2D[row] = [];

  //этот цикл сформирует колонки
  for (let col = 0; col <= 10; col++) {
    arr2D[col] = [];
  }
}

//следующая переменная будет содержать в себе объект с фигурами и их изображением
const figure = {
  I: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ],
  II: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  III: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  IV: [
    [1, 1],
    [1, 1],
  ],
  V: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  VI: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

//дальше мы создадим перменную, в которую поместим объект с указаниме цвета каждого элемента
const color = {
  I: "red",
  II: "green",
  III: "purple",
  IV: "yellow",
  V: "blue",
  VI: "white",
};

//счетчик
let count = 0;

//переменная, которая следит ща текущей фигурой в игре
let wathing = getNextFigure();

//переменная, которая следит за тем, чтобы можно было остановить игру
let pause = null;

//переменная, которая нужна для остановки игры после завершения
let stop = false;

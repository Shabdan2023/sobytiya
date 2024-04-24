// 3 задание
// Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо) анимированно сдвигает div влево или вправо на 100px.
let div = document.querySelector("div");
let btnLeft = document.querySelector("#left");
let btnRight = document.querySelector("#right");

btnLeft.addEventListener("click", (e) => {
  div.style.margin = "0px 100px 0px 0px";
});

btnRight.addEventListener("click", (e) => {
  div.style.margin = "0px 0px 0px 100px";
});

// 9 задание
// Создайте кнопку и нумерованный список с 6 li элементами в HTML. Навесьте на кнопку обработчик события, который при нажатии проходится циклом по элементам списка и меняет их цвет на зеленый.

let ul = document.createElement("ul");
document.body.append(ul);
ul.innerHTML = "<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>";
let li = document.querySelectorAll("li");
let btn = document.createElement("button");
btn.textContent = "Нажми на кнопку";
document.body.append(btn);
btn.addEventListener("click", () => {
  li.forEach((elem) => {
    elem.style.color = "green";
  });
});

// 10 задание
// Создайте в HTML кнопку и таблицу состоящую из двух столбцов и одного ряда. Напишите в JS функцию которая при каждом нажатии на кнопку будет добавлять новый ряд в Вашу таблицу.
let btn1 = document.querySelector("#btn1");
let table = document.querySelector("#table");
btn1.addEventListener("click", () => {
  const table1 = table.insertRow();
  const cell1 = table1.insertCell();
  const cell2 = table1.insertCell();
  cell1.innerHTML = "Новая таблица 1";
  cell2.innerHTML = "Новая таблица 2 ";
}); // Не смог сделать без css

// 13 задание
// Создайте событие где по клику на экран в alert выводятся координаты точки на экране в виде 'x = {x}; y = {y}'.

// document.addEventListener("click", (event) => {
//   let x = event.clientX;
//   let y = event.clientY;
//   alert(`x = ${x}; y = ${y}`);
// });
// 14 задание
// Вам даны заголовки h4 с числами. При нажатию на число в нем должен появится квадрат числа, которое он содержит.
let allH = document.querySelectorAll("h4");
allH.forEach((item) => {
  item.addEventListener("click", (e) => {
    let num = Number(item.textContent);
    let square = num ** 2;
    item.textContent = square;
  });
});

// Задание 17
// Вам дана HTML-форма. При нажатии на кнопку проверяйте заполненность всех полей. Если останутся незаполненные поля — выводите предупреждение 'Оба поля должны быть заполнены!' через alert()

const name1 = document.querySelector("#fname");
const name2 = document.querySelector("#lname");
const btn2 = document.querySelector("#sub");
btn2.addEventListener("click", () => {
  if (name1.value === "" || name2.value === "") {
    alert("Оба поля должны быть заполнены!");
    return false;
  }

  return true;
});

//Задание 19
// Создайте событие input, где при каждом нажатии кнопки на клавиатуре будет выводить в консоль текущее содержимое инпута
let input = document.createElement("input");
input.setAttribute("type", "text");
document.body.append(input);
input.addEventListener("input", (e) => {
  let input1 = e.target.value;
  console.log(input1);
});

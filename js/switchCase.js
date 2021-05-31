"use strict";

// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const num = 1;
switch (num) {
  case 1:
    console.log("winter");
    break;
  case 2:
    console.log("spring");
    break;
  case 3:
    console.log("summer");
    break;
  case 4:
    console.log("autumn");
    break;
  default:
    console.log("You input wrong number");
}

// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

const month = 1;
switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("autumn");
    break;
  default:
    console.log("You input wrong number");
}

// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

const weekDayNumber = Number(prompt("Please, input number of day"));
switch (weekDayNumber) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday!!!");
    break;
  default:
    alert("You input wrong number. Try again");
}

// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const dayMonthNumber = 1;
switch (true) {
  case dayMonthNumber >= 1 && dayMonthNumber <= 10:
    console.log("It is first decade");
    break;
  case dayMonthNumber >= 11 && dayMonthNumber <= 20:
    console.log("It is second decade");
    break;
  case dayMonthNumber >= 21 && dayMonthNumber <= 31:
    console.log("It is third decade");
    break;
  default:
    console.log("You input wrong number of day");
}

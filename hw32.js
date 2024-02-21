// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//   let current = from;

//   const intervalId = setInterval(() => {
//     console.log(current);
//     if (current === to) {
//       clearInterval(intervalId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(1, 5);

// function printNumbers(from, to) {
//   let current = from;

//   function printNumber() {
//     console.log(current);
//     if (current < to) {
//       current++;
//       setTimeout(printNumber, 1000);
//     }
//   }

//   printNumber();
// }

// printNumbers(1, 5);

// -----------------------2------------------------------

// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => console.log("виконалось через 3 секунди"));

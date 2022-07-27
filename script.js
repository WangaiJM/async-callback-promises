// const btn = document.querySelector(".btn");

// btn.addEventListener("click", toggle); // toggle used as  a callback

// // const timer = setInterval(toggle, 50);

// function toggle() {
//   btn.classList.toggle("change");
// }

// // More on callbacks

// function first() {
//   console.log("First action");
// }
// function second() {
//   console.log("Second action");
// }
// function third(number) {
//   console.log(number);
// }

// setTimeout(first, 2000); //timeout callback

// // Adding params to callback
// setTimeout(() => {
//   third(10);
// }, 3000);

// // Promises

// const done = false;

// const isItYetDone = new Promise((resolve, reject) => {
//   if (done) {
//     const reason = "It is Done";
//     resolve(reason);
//   } else {
//     const why = "we are waiting";
//     reject(why);
//   }
// });

// isItYetDone.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

// let promise = new Promise((resolve, reject) => {
//   setTimeout(resolve(123), 1000);
//   reject("Why now?");
// });

// promise
//   .then(
//     (result) => console.log(result),
//     (error) => console.log(error)
//   )
//   .catch(console.log("An error occured"));

// const response = fetch("./data.json");

// const info = new Promise((resolve, reject) => {
//   resolve(console.log(Response));
//   reject("An error occured");
// });

// info.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// // );

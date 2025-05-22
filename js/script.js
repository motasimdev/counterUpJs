let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp);


arr.map((item) => {
  

  let count = 0;

  function counterJs() {
    count++;
    item.innerHTML = count;
    if (count == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    counterJs();
  }, 1000 / item.dataset.number);
});

// console.log(counterUp.dataset.number);

// let count = 0;

// function counterJs() {
//     count++ ;
//     counterUP.innerHTML = count;
//     if (count == 5) {
//       clearInterval(stop)
//     }
// }

// let stop = setInterval(() => {
//   counterJs();
// }, 1000);

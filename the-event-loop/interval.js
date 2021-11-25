var count = 3;
var counter = setInterval(() => {
  if (count > 0) {
    console.log(count--);
  } else if (count === 0) {
    console.log('Blast Off!');
    clearInterval(counter);
  }
}, 1000);

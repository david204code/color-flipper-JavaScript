const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// target the button
const btn = document.getElementById("btn");

// color span
const color = document.querySelector(".color");

// the event selector
btn.addEventListener("click", function () {
  // console.log(document.body);

  // get random between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  // change the backgroundColor
  document.body.style.backgroundColor = colors[randomNumber];

  // add the new value to the <h2><span>
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // use float to round down to the closet integer
  return Math.floor(Math.random() * colors.length);
}

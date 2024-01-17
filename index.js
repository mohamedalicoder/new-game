 // make a addEventListener click
document.querySelector(".btn").addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageName = "dice" + randomNumber1 + ".png";
var imageSrc = "images/" + imageName;
var qur = document.querySelectorAll("img")[0];
qur.setAttribute("src", imageSrc);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // start left random image
  // function randImg(n) {
  // if (randomNumber1 === 1) {
  //     document.querySelector(n).src = "images/dice1.png";
  // } else if (randomNumber1 === 2) {
  //     document.querySelector(n).src = "images/dice2.png";
  // } else if (randomNumber1 === 3) {
  //     document.querySelector(n).src = "images/dice3.png";
  // } else if (randomNumber1 === 4) {
  //     document.querySelector(n).src = "images/dice4.png";
  // } else if (randomNumber1 === 5) {
  //     document.querySelector(n).src = "./images/dice5.png";
  // } else {
  //     document.querySelector(n).src = "images/dice6.png";
  // }
  // }
  // randImg(".img1");
  // start rhight random image

  if (randomNumber2 === 1) {
    document.querySelector(".img2").src = "./images/dice1.png";
  } else if (randomNumber2 === 2) {
    document.querySelector(".img2").src = "images/dice2.png";
  } else if (randomNumber2 === 3) {
    document.querySelector(".img2").src = "images/dice3.png";
  } else if (randomNumber2 === 4) {
    document.querySelector(".img2").src = "images/dice4.png";
  } else if (randomNumber2 === 5) {
    document.querySelector(".img2").src = "./images/dice5.png";
  } else {
    document.querySelector(".img2").src = "images/dice6.png";
  }

  // change the winner text

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").textContent = "It's a Draw!";
  }
 
});

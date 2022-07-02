"use strict";
const buttons = document.querySelectorAll(".button");
const clapSound = new Audio("sounds/clap.wav");
const hihatSound = new Audio("sounds/hihat.wav");
const kickSound = new Audio("sounds/kick.wav");
const openHatSound = new Audio("sounds/openhat.wav");
const boomSound = new Audio("sounds/boom.wav");
const rideSound = new Audio("sounds/ride.wav");
const snareSound = new Audio("sounds/snare.wav");
const tomSound = new Audio("sounds/tom.wav");
const tinkSound = new Audio("sounds/tink.wav");

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "a" || key == "A") {
    clapSound.play();
    buttons[0].classList.add("click_effect");
  } else if (key == "s" || key == "S") {
    hihatSound.play();
    buttons[1].classList.add("click_effect");
  } else if (key == "d" || key == "D") {
    kickSound.play();
    buttons[2].classList.add("click_effect");
  } else if (key == "f" || key == "F") {
    openHatSound.play();
    buttons[3].classList.add("click_effect");
  } else if (key == "g" || key == "G") {
    boomSound.play();
    buttons[4].classList.add("click_effect");
  } else if (key == "h" || key == "H") {
    rideSound.play();
    buttons[5].classList.add("click_effect");
  } else if (key == "j" || key == "J") {
    snareSound.play();
    buttons[6].classList.add("click_effect");
  } else if (key == "k" || key == "K") {
    tomSound.play();
    buttons[7].classList.add("click_effect");
  } else if (key == "l" || key == "L") {
    tinkSound.play();
    buttons[8].classList.add("click_effect");
  }
});

document.addEventListener("keyup", (e) => {
  let key = e.key;
  if (key == "a" || key == "A") {
    setTimeout(() => {
      buttons[0].classList.remove("click_effect");
    }, 500);
  } else if (key == "s" || key == "S") {
    setTimeout(() => {
      buttons[1].classList.remove("click_effect");
    }, 500);
  } else if (key == "d" || key == "D") {
    setTimeout(() => {
      buttons[2].classList.remove("click_effect");
    }, 500);
  } else if (key == "f" || key == "F") {
    setTimeout(() => {
      buttons[3].classList.remove("click_effect");
    }, 500);
  } else if (key == "g" || key == "G") {
    setTimeout(() => {
      buttons[4].classList.remove("click_effect");
    }, 500);
  } else if (key == "h" || key == "H") {
    setTimeout(() => {
      buttons[5].classList.remove("click_effect");
    }, 500);
  } else if (key == "j" || key == "J") {
    setTimeout(() => {
      buttons[6].classList.remove("click_effect");
    }, 500);
  } else if (key == "k" || key == "K") {
    setTimeout(() => {
      buttons[7].classList.remove("click_effect");
    }, 500);
  } else if (key == "l" || key == "L") {
    setTimeout(() => {
      buttons[8].classList.remove("click_effect");
    }, 500);
  }
});

const button = document.querySelector("button");
const h6 = document.querySelector("h6");
const background = document.querySelector("body");

button.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();

  background.style.backgroundColor = color;
  h6.innerText = color;
});
function imgClick() {
  let favoriteColor = prompt("What is your favorite color?");
  let img = document.querySelector("img");

  if (
    favoriteColor === "red" ||
    favoriteColor === "orange" ||
    favoriteColor === "yellow" ||
    favoriteColor === "green" ||
    favoriteColor === "blue" ||
    favoriteColor === "purple" ||
    favoriteColor === "brown"
  ) {
    alert(`You have great tastes!`);
  } else {
    alert(`Oh, You're an artist!`);
  }
}

let colorWheel = document.querySelector("img");
colorWheel.addEventListener("click", imgClick);

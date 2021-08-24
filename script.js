let btn = document.getElementById("btn");
let btnClose = document.getElementById("btnClose");
let share = document.querySelector(".share");
let user = document.querySelector(".user");
let bottomArrow = document.querySelector(".bottom-arrow");

btn.addEventListener("click", function () {
  user.style.display = "none";
  share.style.display = "flex";
  bottomArrow.style.display = "block";
});

btnClose.addEventListener("click", () => {
  share.style.display = "none";
  bottomArrow.style.display = "none";
  user.style.display = "flex";
});

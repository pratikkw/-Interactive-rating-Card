const points = document.querySelectorAll(".item");
const btn = document.querySelector(".btn");
const select_point = document.querySelector(".point");
const review__side = document.querySelector(".leave__review");
const result__side = document.querySelector(".result");
const notice = document.querySelector(".notice");

let result = 0;

const reset = function () {
  points.forEach((item, ind) => {
    item.style.backgroundColor = "hsl(213, 19%, 18%)";
    item.style.color = "hsl(217, 12%, 63%)";
  });
};

// add color to point
const review = function (ind) {
  reset();
  notice.style.display = "none";
  points[ind].style.backgroundColor = "hsl(25, 97%, 53%)";
  points[ind].style.color = "#fff";
};

points.forEach((item, ind) => {
  item.addEventListener("click", function () {
    result = ind + 1;
    review(ind);
  });
});

btn.addEventListener("click", function () {
  reset();
  if (result === 0) {
    notice.style.display = "block";
  } else {
    console.log(result);
    select_point.textContent = result;
    console.log(select_point);
    review__side.classList.toggle("hidden");
    result__side.classList.toggle("hidden");
    result = 0;
  }
});

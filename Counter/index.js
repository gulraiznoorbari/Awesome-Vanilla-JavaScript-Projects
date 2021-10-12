let count = 0;

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const className = event.currentTarget.classList;
    // Count Recorder:
    if (className.contains("decrease")) {
      count--;
    }
    if (className.contains("increase")) {
      count++;
    }
    if (className.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
    // Color Changer:
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
  });
});

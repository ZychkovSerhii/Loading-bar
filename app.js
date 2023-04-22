const counterEl = document.querySelector(".counter");
const loadingEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  loadingEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  } else {
    idx = 0;
    updateNum();
  }
}

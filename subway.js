let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

//let saveEl = document.getElementById("save-btn");

function save() {
  let saveCount = " " + count + " - ";
  saveEl.textContent += saveCount;
  console.log(saveEl.innerText);
  countEl.innerText = 0;
  count = 0;
}

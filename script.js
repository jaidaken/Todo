const addBtn = document.getElementById("addBtn");
const newTodo = document.getElementById("newItem");
const list = document.querySelector("ul");

const checkbox = document.querySelector(".checkbox");
const tick = document.getElementById("tick");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (document.getElementById("placehold")) {
    list.innerHTML = `<li> <button id="checkbox" class="checkbox incomplete"> <img id="tick" src="./images/icon-check.svg" alt="tick"> </button> <p>${newTodo.value}</p> </li>`;
    newTodo.value = "";
  } else {
    list.innerHTML += `<li> <button id="checkbox" class="checkbox incomplete"> <img id="tick" src="./images/icon-check.svg" alt="tick"> </button> <p>${newTodo.value}</p> </li>`;
    newTodo.value = "";
  }
});

checkbox.addEventListener("click", () => {
  console.log("clicked");
});

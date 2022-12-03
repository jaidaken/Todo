const addBtn = document.getElementById("addBtn");
const newTodo = document.getElementById("newItem");
const listNode = document.querySelectorAll("ul");
const remaining = document.getElementById("dyn-num");
const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completeBtn = document.getElementById("completeBtn");
const clearBtn = document.getElementById("clearBtn");

let i = 0;
let tasks = 0;

remaining.innerHTML = `${tasks}`;

function addLeft() {
  remaining.innerHTML = `${(tasks += 1)}`;
}
function remLeft() {
  remaining.innerHTML = `${(tasks -= 1)}`;
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const list = document.querySelector("ul");
  function addLi() {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<input type="checkbox" id="checkbox" class="checkbox incomplete" /> <img id="tick" class="tick" src="./images/icon-check.svg" alt="tick">  <p>${newTodo.value}</p>`;
    newLi.classList.add(`${i}`);
    list.appendChild(newLi);
    newTodo.value = "";
    addLeft();
    i++;
  }

  if (newTodo.value.length < 3) {
    alert("Must be at least 3 characters");
    return false;
  } else if (document.getElementById("placehold")) {
    document.getElementById("placehold").remove();
    addLi();
  } else {
    addLi();
  }
});

for (let li of listNode) {
  li.addEventListener("click", (x) => {
    const num = x.target.className;
    const child = x.target.firstChild;
    if (child.classList === undefined) {
      return false;
    } else if (child.classList.contains("incomplete")) {
      const tick = document.getElementsByClassName(`${num}`)[0].children[1];
      child.checked = true;
      child.classList.remove("incomplete");
      child.classList.add("complete");
      tick.style.opacity = "100%";
      remLeft();
    } else if (child.classList.contains("complete")) {
      const tick = document.getElementsByClassName(`${num}`)[0].children[1];
      child.checked = false;
      child.classList.remove("complete");
      child.classList.add("incomplete");
      tick.style.opacity = "0%";
      addLeft();
    } else {
      return false;
    }
  });
}

allBtn.addEventListener("click", () => {
  if (document.getElementById("placehold")) {
    return false;
  }
  if (!allBtn.classList.contains("active")) {
    allBtn.classList.add("active");
    activeBtn.classList.remove("active");
    completeBtn.classList.remove("active");
  }
  const liItems = document.querySelectorAll("li");
  liItems.forEach((element) => {
    element.style.display = "";
  });
});

activeBtn.addEventListener("click", () => {
  if (document.getElementById("placehold")) {
    return false;
  }
  if (!activeBtn.classList.contains("active")) {
    allBtn.classList.remove("active");
    activeBtn.classList.add("active");
    completeBtn.classList.remove("active");
  }
  const liItems = document.querySelectorAll("li");
  liItems.forEach((element) => {
    element.style.display = "";
    if (element.firstChild.classList.contains("complete")) {
      element.style.display = "none";
    }
  });
});

completeBtn.addEventListener("click", () => {
  if (document.getElementById("placehold")) {
    return false;
  }
  if (!completeBtn.classList.contains("active")) {
    allBtn.classList.remove("active");
    activeBtn.classList.remove("active");
    completeBtn.classList.add("active");
  }
  const liItems = document.querySelectorAll("li");
  liItems.forEach((element) => {
    element.style.display = "";
    if (element.firstChild.classList.contains("incomplete")) {
      element.style.display = "none";
    }
  });
});

clearBtn.addEventListener("click", () => {
  const list = document.querySelector("ul");
  const liItems = document.querySelectorAll("li");

  if (document.getElementById("placehold")) {
    return false;
  } else {
    const complete = document.querySelectorAll(".complete");
    complete.forEach((element) => {
      element.parentElement.remove();
    });
  }
});

const inputArea = document.getElementById("input-area");
const listContent = document.getElementById("list-content");

function addTask() {
  if (inputArea.value === "") {
    alert("You should write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputArea.value;
    listContent.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputArea.value = "";
  saveData();
}

listContent.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContent.innerHTML);
}
function showTask() {
  listContent.innerHTML = localStorage.getItem("data");
  console.log(listContent.innerHTML);
}
showTask();

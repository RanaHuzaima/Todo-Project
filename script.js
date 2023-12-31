const form = document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const addBtn = document.getElementsByClassName("add");
const main = document.querySelector(".main");
const task = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
addElement();
function addElement() {
  task.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    const inner = document.createElement("div");
    inner.setAttribute("class", "inner");
    div.append(inner);
    const p = document.createElement("p");
    p.innerText = value.title;
    inner.append(p);
    const span = document.createElement("span");
    span.innerText = value.description;
    inner.append(span);
    const btn = document.createElement("button");
    btn.setAttribute("class", "del");
    btn.innerText = "X";
    btn.addEventListener("click", () => {
      removeTask();
      task.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(task));
      addElement();
    });
    div.append(btn);
    main.append(div);
  });
}
function removeTask() {
  task.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();
  if(title.value !== "" && description.value !== "" ){
  task.push({
    title: title.value,
    description: description.value,
  })}
  else {
    alert("Please Enter Values in it")
  }
  localStorage.setItem("task", JSON.stringify(task));
  addElement();
  title.value = "";
  description.value = ""
});

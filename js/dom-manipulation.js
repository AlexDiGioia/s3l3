const form = document.getElementById("task-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskList = document.getElementById("task-list");
  const task = document.getElementById("task");

  const listElement = document.createElement("li");
  listElement.innerText = task.value;
  taskList.appendChild(listElement);

  const btnListElement = document.createElement("button");
  btnListElement.classList.add("btnListElement");
  btnListElement.innerText = "Completata!";
  listElement.appendChild(btnListElement);

  const ListButtons = document.getElementsByClassName("btnListElement");
  console.log(ListButtons);

});

const btnClickListElement = function (event) {
  console.log("Hai cliccato un pulsante");
  console.log("evento: ", event.target);
};

const ListButtons = document.getElementsByClassName("btnListElement");
console.log(ListButtons);

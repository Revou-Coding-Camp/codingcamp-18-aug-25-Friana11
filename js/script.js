document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const dateInput = document.getElementById("date-input");
  const todoList = document.getElementById("todo-list");
  const filterInput = document.getElementById("filter-input");

  // Add Todo
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = todoInput.value.trim();
    const date = dateInput.value;

    if (!task || !date) {
      alert("Please fill out both fields!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <span>${task}</span>
        <small>📅 ${date}</small>
      </div>
      <button class="delete-btn">X</button>
    `;

    todoList.appendChild(li);

    // Reset form
    todoInput.value = "";
    dateInput.value = "";
  });

  // Delete Todo
  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });

  // Filter Todo
  filterInput.addEventListener("input", (e) => {
    const filter = e.target.value.toLowerCase();
    const tasks = todoList.getElementsByTagName("li");

    Array.from(tasks).forEach((task) => {
      const text = task.innerText.toLowerCase();
      task.style.display = text.includes(filter) ? "flex" : "none";
    });
  });
});

const leadTodo = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
};

const displayData = (todos) => {
  // 1. dhrote hobe and empty kore dite hobe
  const todoContainer = document.getElementById("todo_container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    console.log(todo);

    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `
          <div class="card">
            <h2>
            Title : ${todo.title}
        </h2>
        <p>Task Completed: ${
          todo.completed
            ? '<i class="fa-solid fa-check"></i>'
            : '<i class="fa-solid fa-square-xmark"> </i>'
        }
           </p>
        </div>
  `;

    todoContainer.appendChild(todoDiv);
  });
};

leadTodo();
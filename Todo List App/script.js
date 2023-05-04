// select the DOM elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

//Add event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

//Add todo function
function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todoUl.appendChild(todoEl);
    input.value = '';
    updateLS();
  }
}

//Update local storage
function updateLS() {
  const todosEl = document.querySelectorAll('li');
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

//Get todos from local storage  and display them
const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

//Explanation of the above code:
// 1. We select the DOM elements
// 2. We add an event listener to the form
// 3. We create a function to add a todo
// 4. We create a function to update the local storage
// 5. We get the todos from the local storage and display them

// Let's go through the code line by line:

// 1. `const form = document.getElementById('form');`
//    - This line selects the HTML element with the ID "form" and assigns it to the constant variable `form`.

// 2. `const input = document.getElementById('input');`
//    - This line selects the HTML element with the ID "input" and assigns it to the constant variable `input`.

// 3. `const todoUl = document.getElementById('todos');`
//    - This line selects the HTML element with the ID "todos" and assigns it to the constant variable `todoUl`.

// 4. `form.addEventListener('submit', (e) => {`
//    - This line adds an event listener to the `form` element for the 'submit' event. It specifies a callback function that will be executed when the form is submitted.

// 5. `e.preventDefault();`
//    - This line prevents the default behavior of form submission, which typically causes a page reload.

// 6. `addTodo();`
//    - This line calls the `addTodo()` function when the form is submitted. It adds a new todo item to the list.

// 7. `function addTodo(todo) {`
//    - This line defines the `addTodo()` function, which takes an optional `todo` parameter. This function is responsible for adding new todo items to the list.

// 8. `let todoText = input.value;`
//    - This line initializes the `todoText` variable with the value entered in the `input` field.

// 9. `if (todo) {`
//    - This line checks if the `todo` parameter is provided. If so, it means we are updating an existing todo item.

// 10. `todoText = todo.text;`
//     - This line assigns the `text` property of the `todo` object to the `todoText` variable. It updates the value to be displayed for an existing todo item.

// 11. `if (todoText) {`
//     - This line checks if `todoText` has a non-empty value. If it does, it proceeds to create a new todo item.

// 12. `const todoEl = document.createElement('li');`
//     - This line creates a new `<li>` element using the `document.createElement()` method and assigns it to the `todoEl` constant variable.

// 13. `if (todo && todo.completed) {`
//     - This line checks if the `todo` object exists and has a `completed` property that evaluates to `true`.

// 14. `todoEl.classList.add('completed');`
//     - This line adds the CSS class 'completed' to the `todoEl` element, visually marking it as completed.

// 15. `todoEl.innerText = todoText;`
//     - This line sets the text content of the `todoEl` element to the value stored in the `todoText` variable.

// 16. `todoEl.addEventListener('click', () => {`
//     - This line adds a click event listener to the `todoEl` element. It specifies a callback function that will be executed when the todo item is clicked.

// 17. `todoEl.classList.toggle('completed');`
//     - This line toggles the presence of the 'completed' class on the `todoEl` element when it is clicked.

// 18. `updateLS();`
//     - This line calls the `updateLS()` function to update the local storage with the changes made to the todo list.

// 19. `todoEl.addEventListener('contextmenu', (e) => {`
//     - This line adds a contextmenu event listener to the `todoEl` element. It specifies a callback function that will be executed when the todo item is right-clicked.

// 20. `e.preventDefault();`
//     - This line prevents the default context

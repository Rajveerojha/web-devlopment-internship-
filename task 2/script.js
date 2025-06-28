// Form Validation (Step 2)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorEl = document.getElementById("error");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!name || !email || !message) {
    errorEl.textContent = "All fields are required!";
    return;
  }
  if (!email.match(emailPattern)) {
    errorEl.textContent = "Enter a valid email address!";
    return;
  }
  errorEl.style.color = 'green';
  errorEl.textContent = "Form submitted successfully!";
  document.getElementById("contactForm").reset();
});

// Dynamic To-Do List (Step 4)
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTask);
todoInput.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const text = todoInput.value.trim();
  if (text === '') return;
  const li = document.createElement('li');
  li.textContent = text;
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'del-btn';
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoInput.value = '';
}

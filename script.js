let taskBtn = document.getElementById('tasksBtn');
let codeBtn = document.getElementById('codeBtn');
let taskSection = document.getElementById('task-section');
let codeSection = document.getElementById('code-section');
let taskForm = document.getElementById('task-form');
let taskList = document.getElementById('task-list');

let updatedTaskList = JSON.parse(localStorage.getItem('tasks')) || [];

taskBtn.addEventListener('click', () => {
    showSection('task-section');
});

codeBtn.addEventListener('click', () => {
    showSection('code-section');
});

function showSection(sectionId) {
    taskSection.style.display = sectionId === 'task-section' ? 'flex' : 'none';
    taskSection.style.flexDirection = sectionId === 'task-section' ? 'column' : 'row';
    codeSection.style.display = sectionId === 'code-section' ? 'flex' : 'none';
    codeSection.style.flexDirection = sectionId === 'code-section' ? 'column' : 'row';
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        title: document.getElementById('title').value,
        dueDate: document.getElementById('dueDate').value,
        priority: document.getElementById('priority').value,
        category: document.getElementById('category').value || 'General',
        status: 'Pending'
    };
    updatedTaskList.push(task);
    saveTasks();
    renderTasks();
    taskForm.reset();
});

const renderTasks = () => {
    taskList.innerHTML = '';
    updatedTaskList.forEach(updatedTask => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('taskCard', updatedTask.priority);
        newDiv.innerHTML = `
        <h4>${updatedTask.title}</h4>
        <p>Due: ${updatedTask.dueDate} | Priority: ${updatedTask.priority} | Category: ${updatedTask.category}</p>
        <button onclick="toggleStatus(${updatedTask.id})"> ${updatedTask.status == 'Pending' ? 'Mark Complete' : 'Pending'}</button>
        <button onclick="deleteTask(${updatedTask.id})">Delete</button>
        `
        taskList.appendChild(newDiv);
    });
}

const toggleStatus = (taskId) => {
    iTasks = updatedTaskList.map(task => {
        if (task.id === taskId) {
            task.status = task.status === 'Pending' ? 'Complete' : 'Pending';
        }
    });
    saveTasks();
    renderTasks();
}

const deleteTask = (taskId)=>{
    updatedTaskList = updatedTaskList.filter(task => task.id != taskId);
    saveTasks();
    renderTasks();

}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
}

renderTasks();


const codeBox = document.querySelector(".code-area code");

const codeString = `
let taskBtn = document.getElementById('tasksBtn');
let codeBtn = document.getElementById('codeBtn');
let taskSection = document.getElementById('task-section');
let codeSection = document.getElementById('code-section');
let taskForm = document.getElementById('task-form');
let taskList = document.getElementById('task-list');

let updatedTaskList = JSON.parse(localStorage.getItem('tasks')) || [];

taskBtn.addEventListener('click', () => {
    showSection('task-section');
});

codeBtn.addEventListener('click', () => {
    showSection('code-section');
});

function showSection(sectionId) {
    taskSection.style.display = sectionId === 'task-section' ? 'flex' : 'none';
    taskSection.style.flexDirection = sectionId === 'task-section' ? 'column' : 'row';
    codeSection.style.display = sectionId === 'code-section' ? 'flex' : 'none';
    codeSection.style.flexDirection = sectionId === 'code-section' ? 'column' : 'row';
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        title: document.getElementById('title').value,
        dueDate: document.getElementById('dueDate').value,
        priority: document.getElementById('priority').value,
        category: document.getElementById('category').value || 'General',
        status: 'Pending'
    };
    updatedTaskList.push(task);
    saveTasks();
    renderTasks();
    taskForm.reset();
});

const renderTasks = () => {
    taskList.innerHTML = '';
    updatedTaskList.forEach(updatedTask => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('taskCard', updatedTask.priority);
        newDiv.innerHTML = \`
        <h4>\\\${updatedTask.title}</h4>
        <!-- We use the \\\ Because we can't show the $ direct in this section  -->
        <p>
          Due: \\\${updatedTask.dueDate} |
          Priority: \\\${updatedTask.priority} |
          Category: \\\${updatedTask.category}
        </p>
        <button onclick="toggleStatus(\\\${updatedTask.id})">
          \\\${updatedTask.status == 'Pending' ? 'Mark Complete' : 'Pending'}
        </button>
        <button onclick="deleteTask(\\\${updatedTask.id})">Delete</button>
        \`;
        taskList.appendChild(newDiv);
    });
}

const toggleStatus = (taskId) => {
    updatedTaskList = updatedTaskList.map(task => {
        if (task.id === taskId) {
            task.status = task.status === 'Pending' ? 'Complete' : 'Pending';
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
}
    renderTasks();
`;

codeBox.textContent = codeString;
Prism.highlightElement(codeBox);






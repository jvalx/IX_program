class Task {
    constructor(name, completed) {
      this.name = name;
      this.completed = completed;
    }
  }
  
  class UserInterface {
    constructor() {
      this.nameInput = document.getElementById('task-input');
      this.completedInput = false;
    
      this.form = document.getElementById('form');
      this.tableBody = document.getElementById('table-body');
      this.tasks = [];
    }
  
    bindEventListeners() {
      this.form.addEventListener('submit', (e) => this.onFromSubmit(e));
    }
    
    onFromSubmit(event) {
      event.preventDefault(); // The preventDefault() method of the Event 
      //interface tells the user agent that if the event does not get explicitly handled, 
      //its default action should not be taken as it normally would be.
  
      const task = new Task(
        this.nameInput.value,
        false,
 
      );
  
      this.tasks.push(task);
      this.populateTasksTable();
  
      this.nameInput.value = '';

    }
  
    populateTasksTable() {
  
      this.tableBody.innerHTML = '';
  
      for (const task of this.tasks) {
        const row = document.createElement('tr');
  
        const nameCell = document.createElement('td');
        const completedCell = document.createElement('td');
        const toggleCell = document.createElement('td');
        const toggle = document.createElement('button');
        
  
        nameCell.innerHTML = task.name;
        completedCell.innerHTML = task.completed ? "Done" : "Incomplete";
        toggle.innerHTML = "toggle";
        toggle.classList.add("btn");
        toggle.classList.add("btn-outline-dark");
  
        toggle.addEventListener('click', (e) => this.onToggleButtonClick(task));
       
  
        row.append(nameCell);
        row.append(completedCell);
        row.append(toggleCell);

        this.tableBody.append(row);
      }
  
    }
  
    onToggleButtonClick(taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
        this.populateTasksTable();
    }
  }
  
  const ui = new UserInterface();
  ui.bindEventListeners();
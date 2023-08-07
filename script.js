const tasks = [];

    function addTask() {
      const taskTitleInput = document.getElementById("taskTitleInput");
      const taskDescriptionInput = document.getElementById("taskDescriptionInput");
      const title = taskTitleInput.value.trim();
      const description = taskDescriptionInput.value.trim();

      if (!title) return;

      const newTask = {
        id: Date.now(),
        title,
        description,
      };

      tasks.push(newTask);

      renderTasks();
      taskTitleInput.value = "";
      taskDescriptionInput.value = "";
    }

    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <strong>${task.title}</strong>: ${task.description}
          <button onclick="editTask(${task.id})">Edit</button>
          <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(taskItem);
      });
    }

    function editTask(id) {
      const task = tasks.find((task) => task.id === id);

      if (!task) return;

      const title = prompt("Edit Task Title:", task.title);
      const description = prompt("Edit Task Description:", task.description);

      if (title !== null && title.trim() !== "") {
        task.title = title.trim();
      }

      if (description !== null) {
        task.description = description.trim();
      }

      renderTasks();
    }

    function deleteTask(id) {
      const index = tasks.findIndex((task) => task.id === id);

      if (index !== -1) {
        tasks.splice(index, 1);
        renderTasks();
      }
    }
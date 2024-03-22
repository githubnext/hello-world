using System;
using System.Collections.Generic;

namespace TaskManager
{
    // A class that provides business logic for tasks
    public class TaskService
    {
        // A property that holds the task list
        public TaskList TaskList { get; set; }

        // A property that holds the task repository
        public TaskRepository TaskRepository { get; set; }

        // A constructor that takes parameters for the TaskList and TaskRepository properties and assigns them
        public TaskService(TaskList taskList, TaskRepository taskRepository)
        {
            TaskList = taskList;
            TaskRepository = taskRepository;
        }

        // A method that creates a new task and adds it to the task list and the task repository
        public void CreateTask(string title, string description, string status, DateTime dueDate)
        {
            // Create a new task object with the given parameters
            Task task = new Task(title, description, status, dueDate);

            // Add the task to the task list
            TaskList.Add(task);

            // Save the task list to the task repository
            TaskRepository.Save(TaskList.GetAll());
        }

        // A method that deletes a task by its id from the task list and the task repository
        public void DeleteTask(string id)
        {
            // Remove the task from the task list by its id
            TaskList.Remove(id);

            // Save the task list to the task repository
            TaskRepository.Save(TaskList.GetAll());
        }

        // A method that edits a task by its id with new values and updates the task list and the task repository
        public void EditTask(string id, string title, string description, string status, DateTime dueDate)
        {
            // Create a new task object with the given parameters
            Task newTask = new Task(title, description, status, dueDate);

            // Update the task in the task list by its id
            TaskList.Update(id, newTask);

            // Save the task list to the task repository
            TaskRepository.Save(TaskList.GetAll());
        }

        // A method that returns a task by its id from the task list
        public Task GetTask(string id)
        {
            // Find the task in the task list by its id
            return TaskList.Find(id);
        }

        // A method that returns all the tasks from the task list
        public List<Task> ListTasks()
        {
            // Return the task list
            return TaskList.GetAll();
        }
    }
}

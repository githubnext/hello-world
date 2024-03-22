using System;
using System.Collections.Generic;
using System.Linq;

namespace TaskManager
{
    // A class that manages a collection of tasks
    public class TaskList
    {
        // A property that holds the tasks as a list
        public List<Task> Tasks { get; set; }

        // A constructor that initializes the Tasks property to an empty list
        public TaskList()
        {
            Tasks = new List<Task>();
        }

        // A method that adds a new task to the Tasks property
        public void Add(Task task)
        {
            Tasks.Add(task);
        }

        // A method that removes a task from the Tasks property by its Id
        public void Remove(string id)
        {
            Tasks.RemoveAll(t => t.Id == id);
        }

        // A method that updates a task in the Tasks property by its Id
        public void Update(string id, Task newTask)
        {
            int index = Tasks.FindIndex(t => t.Id == id);
            if (index >= 0)
            {
                Tasks[index] = newTask;
            }
        }

        // A method that finds a task in the Tasks property by its Id
        public Task Find(string id)
        {
            return Tasks.Find(t => t.Id == id);
        }

        // A method that returns all the tasks in the Tasks property
        public List<Task> GetAll()
        {
            return Tasks;
        }
    }
}

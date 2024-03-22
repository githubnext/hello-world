using System;

namespace TaskManager
{
    // A class that handles user input and output for tasks
    public class TaskController
    {
        // A property that holds the task service
        public TaskService TaskService { get; set; }

        // A constant that holds the file name for the task repository
        public const string FileName = "tasks.json";

        // A constructor that instantiates a new task service object with a new task list and a new task repository using the file name
        public TaskController()
        {
            TaskService = new TaskService(new TaskList(), new TaskRepository(FileName));
        }

        // A method that displays a menu of options for the user to interact with the tasks and calls the corresponding methods of the task service
        public void Run()
        {
            // A variable that holds the user's choice
            int choice = 0;

            // A loop that repeats until the user chooses to exit
            do
            {
                // Display the menu options
                Console.WriteLine("Task Manager Menu");
                Console.WriteLine("1. Create a new task");
                Console.WriteLine("2. Delete a task by id");
                Console.WriteLine("3. Edit a task by id");
                Console.WriteLine("4. View a task by id");
                Console.WriteLine("5. List all tasks");
                Console.WriteLine("6. Exit");

                // Prompt the user for a choice
                Console.Write("Enter your choice (1-6): ");

                // Try to parse the user's input as an integer
                bool valid = int.TryParse(Console.ReadLine(), out choice);

                // If the input is not valid or not in range, display an error message
                if (!valid || choice < 1 || choice > 6)
                {
                    Console.WriteLine("Invalid choice. Please try again.");
                }
                // Otherwise, switch on the choice and call the corresponding method
                else
                {
                    switch (choice)
                    {
                        case 1:
                            CreateTaskOption();
                            break;
                        case 2:
                            DeleteTaskOption();
                            break;
                        case 3:
                            EditTaskOption();
                            break;
                        case 4:
                            ViewTaskOption();
                            break;
                        case 5:
                            ListTasksOption();
                            break;
                        case 6:
                            Console.WriteLine("Thank you for using the task manager. Goodbye!");
                            break;
                    }
                }

                // Add a blank line for readability
                Console.WriteLine();

            } while (choice != 6); // Repeat until the user chooses to exit
        }

        // A method that prompts the user for input to create a new task and calls the task service's CreateTask method
        private void CreateTaskOption()
        {
            // Prompt the user for the title of the task
            Console.Write("Enter the title of the task: ");
            string title = Console.ReadLine();

            // Prompt the user for the description of the task
            Console.Write("Enter the description of the task: ");
            string description = Console.ReadLine();

            // Prompt the user for the status of the task
            Console.Write("Enter the status of the task (TODO, IN PROGRESS, DONE): ");
            string status = Console.ReadLine();

            // Validate the status input
            while (status != "TODO" && status != "IN PROGRESS" && status != "DONE")
            {
                // Display an error message and prompt again
                Console.WriteLine("Invalid status. Please enter TODO, IN PROGRESS, or DONE.");
                Console.Write("Enter the status of the task (TODO, IN PROGRESS, DONE): ");
                status = Console.ReadLine();
            }

            // Prompt the user for the due date of the task
            Console.Write("Enter the due date of the task (MM/DD/YYYY): ");
            string dueDateInput = Console.ReadLine();

            // Try to parse the due date input as a DateTime object
            bool valid = DateTime.TryParse(dueDateInput, out DateTime dueDate);

            // Validate the due date input
            while (!valid)
            {
                // Display an error message and prompt again
                Console.WriteLine("Invalid due date. Please enter in MM/DD/YYYY format.");
                Console.Write("Enter the due date of the task (MM/DD/YYYY): ");
                dueDateInput = Console.ReadLine();
                valid = DateTime.TryParse(dueDateInput, out dueDate);
            }

            // Call the task service's CreateTask method with the user's input
            TaskService.CreateTask(title, description, status, dueDate);

            // Display a success message
            Console.WriteLine("Task created successfully.");
        }

        // A method that prompts the user for input to delete a task by id and calls the task service's DeleteTask method
        private void DeleteTaskOption()
        {
            // Prompt the user for the id of the task to delete
            Console.Write("Enter the id of the task to delete: ");
            string id = Console.ReadLine();

            // Try to find the task by id
            Task task = TaskService.GetTask(id);

            // If the task is not found, display an error message
            if (task == null)
            {
                Console.WriteLine("Task not found. Please enter a valid id.");
            }
            // Otherwise, call the task service's DeleteTask method with the id
            else
            {
                TaskService.DeleteTask(id);

                // Display a success message
                Console.WriteLine("Task deleted successfully.");
            }
        }

        // A method that prompts the user for input to edit a task by id and calls the task service's EditTask method
        private void EditTaskOption()
        {
            // Prompt the user for the id of the task to edit
            Console.Write("Enter the id of the task to edit: ");
            string id = Console.ReadLine();

            // Try to find the task by id
            Task task = TaskService.GetTask(id);

            // If the task is not found, display an error message
            if (task == null)
            {
                Console.WriteLine("Task not found. Please enter a valid id.");
            }
            // Otherwise, prompt the user for new values for the task properties
            else
            {
                // Display the current task details
                Console.WriteLine("Current task details:");
                Console.WriteLine(task);

                // Prompt the user for the new title of the task
                Console.Write("Enter the new title of the task (leave blank to keep the same): ");
                string title = Console.ReadLine();

                // If the user entered a blank value, keep the current title
                if (title == "")
                {
                    title = task.Title;
                }

                // Prompt the user for the new description of the task
                Console.Write("Enter the new description of the task (leave blank to keep the same): ");
                string description = Console.ReadLine();

                // If the user entered a blank value, keep the current description
                if (description == "")
                {
                    description = task.Description;
                }

                // Prompt the user for the new status of the task
                Console.Write("Enter the new status of the task (TODO, IN PROGRESS, DONE, or leave blank to keep the same): ");
                string status = Console.ReadLine();

                // If the user entered a blank value, keep the current status
                if (status == "")
                {
                    status = task.Status;
                }

                // Validate the status input
                while (status != "TODO" && status != "IN PROGRESS" && status != "DONE")
                {
                    // Display an error message and prompt again
                    Console.WriteLine("Invalid status. Please enter TODO, IN PROGRESS, DONE, or leave blank to keep the same.");
                    Console.Write("Enter the new status of the task (TODO, IN PROGRESS, DONE, or leave blank to keep the same): ");
                    status = Console.ReadLine();

                    // If the user entered a blank value, keep the current status
                    if (status == "")
                    {
                        status = task.Status;
                        break;
                    }
                }

                // Prompt the user for the new due date of the task
                Console.Write("Enter the new due date of the task (MM/DD/YYYY or leave blank to keep the same): ");
                string dueDateInput = Console.ReadLine();

                // If the user entered a blank value, keep the current due date
                if (dueDateInput == "")
                {
                    dueDateInput = task.DueDate.ToShortDateString();
                }

                // Try to parse the due date input as a DateTime object
                bool valid = DateTime.TryParse(dueDateInput, out DateTime dueDate);

                // Validate the due date input
                while (!valid)
                {
                    // Display an error message and prompt again
                    Console.WriteLine("Invalid due date. Please enter in MM/DD/YYYY format or leave blank to keep the same.");
                    Console.Write("Enter the new due date of the task (MM/DD/YYYY or leave blank to keep the same): ");
                    dueDateInput = Console.ReadLine();

                    // If the user entered a blank value, keep the current due date
                    if (dueDateInput == "")
                    {
                        dueDateInput = task.DueDate.ToShortDateString();
                        valid = true;
                    }
                    else
                    {
                        valid = DateTime.TryParse(dueDateInput, out dueDate);
                    }
                }

                // Call the task service's EditTask method with the id and the new values
                TaskService.EditTask(id, title, description, status, dueDate);

                // Display a success message
                Console.WriteLine("Task edited successfully.");
            }
        }

        // A method that prompts the user for input to view a task by id and calls the task service's GetTask method
        private void ViewTaskOption()
        {
            // Prompt the user for the id of the task to view
            Console.Write("Enter the id of the task to view: ");
            string id = Console.ReadLine();

            // Try to find the task by id
            Task task = TaskService.GetTask(id);

            // If the task is not found, display an error message
            if (task == null)
            {
                Console.WriteLine("Task not found. Please enter a valid id.");
            }
            // Otherwise, display the task details
            else
            {
                Console.WriteLine("Task details:");
                Console.WriteLine(task);
            }
        }

        // A method that calls the task service's ListTasks method and displays all the tasks
        private void ListTasksOption()
        {
            // Get the list of tasks from the task service
            var tasks = TaskService.ListTasks();

            // If the list is empty, display a message
            if (tasks.Count == 0)
            {
                Console.WriteLine("No tasks to display.");
            }
            // Otherwise, display each task with a separator
            else
            {
                Console.WriteLine("All tasks:");
                foreach (var task in tasks)
                {
                    Console.WriteLine(task);
                    Console.WriteLine("----------");
                }
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace TaskManager
{
    // A class that handles persistence of tasks to a file
    public class TaskRepository
    {
        // A property that holds the file name
        public string FileName { get; set; }

        // A constructor that takes a parameter for the FileName property and assigns it
        public TaskRepository(string fileName)
        {
            FileName = fileName;
        }

        // A method that reads the tasks from the file using JSON serialization
        public List<Task> Load()
        {
            // If the file does not exist, return an empty list
            if (!File.Exists(FileName))
            {
                return new List<Task>();
            }

            // Otherwise, read the file content and deserialize it to a list of tasks
            string json = File.ReadAllText(FileName);
            return JsonConvert.DeserializeObject<List<Task>>(json);
        }

        // A method that writes the tasks to the file using JSON serialization
        public void Save(List<Task> tasks)
        {
            // Serialize the list of tasks to a JSON string
            string json = JsonConvert.SerializeObject(tasks, Formatting.Indented);

            // Write the JSON string to the file
            File.WriteAllText(FileName, json);
        }
    }
}

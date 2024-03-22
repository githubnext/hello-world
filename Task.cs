using System;

namespace TaskManager
{
    // A class that represents a task
    public class Task
    {
        // Properties of a task
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime DueDate { get; set; }

        // A constructor that takes parameters for all properties except Id
        public Task(string title, string description, string status, DateTime dueDate)
        {
            Id = GenerateId();
            Title = title;
            Description = description;
            Status = status;
            DueDate = dueDate;
        }

        // A method that generates a random string of 8 characters
        private string GenerateId()
        {
            var random = new Random();
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var id = new char[8];
            for (int i = 0; i < id.Length; i++)
            {
                id[i] = chars[random.Next(chars.Length)];
            }
            return new string(id);
        }

        // A method that overrides the ToString method to return a formatted string of the task details
        public override string ToString()
        {
            return $"Id: {Id}\nTitle: {Title}\nDescription: {Description}\nStatus: {Status}\nDueDate: {DueDate.ToShortDateString()}";
        }
    }
}

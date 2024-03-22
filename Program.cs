using System;

namespace TaskManager
{
    class Program
    {
        static void Main(string[] args)
        {
            TaskController controller = new TaskController();
            controller.Run();
        }
    }
}

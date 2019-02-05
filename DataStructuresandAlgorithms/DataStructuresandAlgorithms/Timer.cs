using System;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;

namespace DataStructuresandAlgorithms
{
    public class Timer
    {
        TimeSpan startingTime;
        TimeSpan duration;

        public Timer()
        {
            startingTime = new TimeSpan(0);
            duration = new TimeSpan(0);

        }

        public void StopTimer()
        {
            duration = Process.GetCurrentProcess().Threads[0].UserProcessorTime.Subtract(startingTime);
            
        }
        public void StartTimer()
        {
            GC.Collect();
            GC.WaitForPendingFinalizers();
            startingTime = Process.GetCurrentProcess().Threads[0].UserProcessorTime;
        }
        public TimeSpan Result()
        {
            return duration;
        }
       
    }
}

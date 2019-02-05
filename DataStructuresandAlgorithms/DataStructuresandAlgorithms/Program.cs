using System;


namespace DataStructuresandAlgorithms
{
    class Program
    {
        
        static void Main(string[] args)
        {
            CArray nums = new CArray(10);
            Random rndm = new Random(100);
            for ( int i = 0; i <= 9;  i++)
            {
                nums.Insert ((int) (rndm.NextDouble() * 100 ));   
            }
            nums.DisplayElements();
            Console.ReadKey();
        } 
     }
    
}

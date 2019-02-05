using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructuresandAlgorithms
{
    class CArray
    {
        private int[] arr;
        private int upper;
        private int numberElements;

        public CArray(int size)
        {
            arr = new int[size];
            upper = size - 1;
            numberElements = 0;

        }
        public void Insert(int item)
        {
            arr[numberElements] = item;
            numberElements++;
        }
        public void DisplayElements()
        {
            for ( int i = 0; i <= upper; i++)
            {
                Console.Write(arr[i] + " ");
            }
        }
        public void Clear()
        {
            for ( int i = 0; i <= upper; i++)
            {
                arr[i] = 0;
                numberElements = 0;
            }
        }
    }
}

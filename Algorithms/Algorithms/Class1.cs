using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Added By M.J.Hartman - March 13, 2018

namespace Algorithms
{
    public class VolumeOfCylinder
    {
        public double ComputeVolumeOfCylinder(double radius, double height)
        {
            // make sure aguments are sane
            // no negative or zero

            if ( radius <= 0 )
            {
                Console.WriteLine("Radius is less than or equal to zero. {0}", radius);
            }
            
            if ( height <= 0 )
            {
                Console.WriteLine("Height is less than or equal to zero. {0}", height);
            }

            // give some feedback
            Console.WriteLine("Computing the volume of a cylinder {0} radius, {1} height.  Volume = ", radius, height);

            // square the radius
            radius *= radius;
            radius *= Math.PI;
            var volume = radius * height;

            return (double) volume;
        }
    }
}

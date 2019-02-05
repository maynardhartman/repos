using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MvcMovie.Models
{
    public class Album
    {
        public int AlbumID { get; set; }
        public int ReviewID { get; set; }
        public string Title { get; set; }
        public Artist Artist { get; set; }
        public virtual List<Review> Review { get; set; }

    }
}
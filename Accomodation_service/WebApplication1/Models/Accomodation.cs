using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Accomodation
    {
        public int Aid { get; set; }
        public string Name { get; set; } = null!;
        public string Availability { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string Contactno { get; set; } = null!;
    }
}

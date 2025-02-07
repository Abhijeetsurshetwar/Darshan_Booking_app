using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class DevoteeBooking
    {
        public DevoteeBooking()
        {
            DevoteeNames = new HashSet<DevoteeName>();
        }

        public long BookingId { get; set; }
        public DateTime? BookingTime { get; set; }
        public string? Date { get; set; }
        public string? Slot { get; set; }
        public int? TotalDevotee { get; set; }
        public string? UserName { get; set; }

        public virtual ICollection<DevoteeName> DevoteeNames { get; set; }
    }
}

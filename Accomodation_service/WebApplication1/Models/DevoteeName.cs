using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class DevoteeName
    {
        public long Id { get; set; }
        public string? AadharNumber { get; set; }
        public int? Age { get; set; }
        public string? DevoteeName1 { get; set; }
        public string? Gender { get; set; }
        public long? BookingId { get; set; }

        public virtual DevoteeBooking? Booking { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class ScheduleDate
    {
        public ScheduleDate()
        {
            Slots = new HashSet<Slot>();
        }

        public long Id { get; set; }
        public string? Date { get; set; }
        public long? ScheduleId { get; set; }

        public virtual Schedule? Schedule { get; set; }
        public virtual ICollection<Slot> Slots { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Slot
    {
        public long Id { get; set; }
        public string? Time { get; set; }
        public int Vacancy { get; set; }
        public long? ScheduleDateId { get; set; }

        public virtual ScheduleDate? ScheduleDate { get; set; }
    }
}

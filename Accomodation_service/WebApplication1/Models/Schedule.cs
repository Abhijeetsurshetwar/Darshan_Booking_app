using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Schedule
    {
        public Schedule()
        {
            ScheduleDates = new HashSet<ScheduleDate>();
        }

        public long Id { get; set; }

        public virtual ICollection<ScheduleDate> ScheduleDates { get; set; }
    }
}

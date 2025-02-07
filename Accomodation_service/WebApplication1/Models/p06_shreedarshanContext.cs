using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplication1.Models
{
    public partial class p06_shreedarshanContext : DbContext
    {
        public p06_shreedarshanContext()
        {
        }

        public p06_shreedarshanContext(DbContextOptions<p06_shreedarshanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Accomodation> Accomodations { get; set; } = null!;
        public virtual DbSet<DevoteeBooking> DevoteeBookings { get; set; } = null!;
        public virtual DbSet<DevoteeName> DevoteeNames { get; set; } = null!;
        public virtual DbSet<Schedule> Schedules { get; set; } = null!;
        public virtual DbSet<ScheduleDate> ScheduleDates { get; set; } = null!;
        public virtual DbSet<Slot> Slots { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=p06_shreedarshan", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.40-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Accomodation>(entity =>
            {
                entity.HasKey(e => e.Aid)
                    .HasName("PRIMARY");

                entity.ToTable("accomodation");

                entity.Property(e => e.Aid).HasColumnName("AID");

                entity.Property(e => e.Address).HasMaxLength(255);

                entity.Property(e => e.Availability).HasMaxLength(255);

                entity.Property(e => e.Contactno).HasMaxLength(255);

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<DevoteeBooking>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PRIMARY");

                entity.ToTable("devotee_booking");

                entity.Property(e => e.BookingId)
                    .ValueGeneratedNever()
                    .HasColumnName("booking_id");

                entity.Property(e => e.BookingTime)
                    .HasColumnType("timestamp")
                    .HasColumnName("booking_time");

                entity.Property(e => e.Date)
                    .HasMaxLength(255)
                    .HasColumnName("date");

                entity.Property(e => e.Slot)
                    .HasMaxLength(255)
                    .HasColumnName("slot");

                entity.Property(e => e.TotalDevotee).HasColumnName("total_devotee");

                entity.Property(e => e.UserName)
                    .HasMaxLength(255)
                    .HasColumnName("user_name");
            });

            modelBuilder.Entity<DevoteeName>(entity =>
            {
                entity.ToTable("devotee_name");

                entity.HasIndex(e => e.BookingId, "FKk8bl5gx307ytlo7m8j8i2k1yl");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AadharNumber)
                    .HasMaxLength(255)
                    .HasColumnName("aadhar_number");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.DevoteeName1)
                    .HasMaxLength(255)
                    .HasColumnName("devotee_name");

                entity.Property(e => e.Gender)
                    .HasMaxLength(255)
                    .HasColumnName("gender");

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.DevoteeNames)
                    .HasForeignKey(d => d.BookingId)
                    .HasConstraintName("FKk8bl5gx307ytlo7m8j8i2k1yl");
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.ToTable("schedule");

                entity.Property(e => e.Id).HasColumnName("id");
            });

            modelBuilder.Entity<ScheduleDate>(entity =>
            {
                entity.ToTable("schedule_date");

                entity.HasIndex(e => e.ScheduleId, "FKn3vlq6amqfng82f79o6v5f3ud");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Date)
                    .HasMaxLength(255)
                    .HasColumnName("date");

                entity.Property(e => e.ScheduleId).HasColumnName("schedule_id");

                entity.HasOne(d => d.Schedule)
                    .WithMany(p => p.ScheduleDates)
                    .HasForeignKey(d => d.ScheduleId)
                    .HasConstraintName("FKn3vlq6amqfng82f79o6v5f3ud");
            });

            modelBuilder.Entity<Slot>(entity =>
            {
                entity.ToTable("slot");

                entity.HasIndex(e => e.ScheduleDateId, "FKtgnw4d43t1qq364bo7xflk2l6");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ScheduleDateId).HasColumnName("schedule_date_id");

                entity.Property(e => e.Time)
                    .HasMaxLength(255)
                    .HasColumnName("time");

                entity.Property(e => e.Vacancy).HasColumnName("vacancy");

                entity.HasOne(d => d.ScheduleDate)
                    .WithMany(p => p.Slots)
                    .HasForeignKey(d => d.ScheduleDateId)
                    .HasConstraintName("FKtgnw4d43t1qq364bo7xflk2l6");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

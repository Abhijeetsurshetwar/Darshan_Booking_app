package com.microservice.bookingservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;

@Entity
public class Slot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String time;
    private int vacancy;

    @ManyToOne
    @JoinColumn(name = "schedule_date_id")
    @JsonBackReference
    private ScheduleDate scheduleDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getVacancy() {
        return vacancy;
    }

    public void setVacancy(int vacancy) {
        this.vacancy = vacancy;
    }

    public ScheduleDate getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(ScheduleDate scheduleDate) {
        this.scheduleDate = scheduleDate;
    }
}

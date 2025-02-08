package com.microservice.bookingservice.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;


import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ScheduleDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;

    @OneToMany(mappedBy = "scheduleDate", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Slot> slots = new ArrayList<>();
 
    @ManyToOne
    @JoinColumn(name = "schedule_id")
    @JsonBackReference
    private Schedule schedule;

 

	public Long getId() {
        return id;	
    }

    @Override
	public String toString() {
		return "ScheduleDate [id=" + id + ", date=" + date + ", slots=" + slots + ", schedule=" + schedule + "]";
	}

	public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public List<Slot> getSlots() {
        return slots;
    }

    public void setSlots(List<Slot> slots) {
        this.slots = slots;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }
}

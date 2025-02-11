package com.microservice.bookingservice.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;
    
	@OneToMany(mappedBy = "schedule", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<ScheduleDate> scheduleDates = new ArrayList<>();
	
	
	
    
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<ScheduleDate> getScheduleDates() {
        return scheduleDates;
    }

    public void setScheduleDates(List<ScheduleDate> scheduleDates) {
        this.scheduleDates = scheduleDates;
    }
}
package com.microservice.bookingservice.entities;

import java.time.LocalDateTime;

import org.antlr.v4.runtime.misc.NotNull;

public class DummyDevotee {
	
    private Long bookingId;

    private LocalDateTime bookingTime = LocalDateTime.now();


    private String userName;

    private String date;

    private String slot;

    private Integer totalDevotee;

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDateTime getBookingTime() {
		return bookingTime;
	}

	public void setBookingTime(LocalDateTime bookingTime) {
		this.bookingTime = bookingTime;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getSlot() {
		return slot;
	}

	public void setSlot(String slot) {
		this.slot = slot;
	}

	public Integer getTotalDevotee() {
		return totalDevotee;
	}

	public void setTotalDevotee(Integer totalDevotee) {
		this.totalDevotee = totalDevotee;
	}
    
    
}

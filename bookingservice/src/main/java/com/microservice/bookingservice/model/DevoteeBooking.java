package com.microservice.bookingservice.model;


import com.sun.istack.NotNull;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
public class DevoteeBooking {

    @Id
    private Long bookingId;

    @NotNull
    private LocalDateTime bookingTime = LocalDateTime.now();


    private String userName;

    private String date;

    private String slot;

    @NotNull
    private Integer totalDevotee;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "booking_id")
    private List<DevoteeName> devoteeNames;


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

    public String getSlot() {
        return slot;
    }

    public void setSlot(String slot) {
        this.slot = slot;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getTotalDevotee() {
        return totalDevotee;
    }

    public void setTotalDevotee(Integer totalDevotee) {
        this.totalDevotee = totalDevotee;
    }

    public List<DevoteeName> getDevoteeNames() {
        return devoteeNames;
    }

    public void setDevoteeNames(List<DevoteeName> devoteeNames) {
        this.devoteeNames = devoteeNames;
    }
}
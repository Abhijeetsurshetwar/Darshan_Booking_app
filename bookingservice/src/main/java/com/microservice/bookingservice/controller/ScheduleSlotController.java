package com.microservice.bookingservice.controller;

import com.microservice.bookingservice.entities.DevoteeBooking;
import com.microservice.bookingservice.entities.DummyDevotee;
import com.microservice.bookingservice.entities.Schedule;
import com.microservice.bookingservice.entities.ScheduleDate;
import com.microservice.bookingservice.service.ScheduleSlotService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScheduleSlotController {

    @Autowired
    private ScheduleSlotService scheduleSlotService;
    
    
    @PostMapping("/schedules/addScheduleDates")
    public ResponseEntity<Schedule> addScheduleDates(
            @RequestParam int scheduleId, 
            @RequestBody List<ScheduleDate> scheduleDates) {
        
        return ResponseEntity.ok(scheduleSlotService.addScheduleDates(scheduleId, scheduleDates));
    }


    @GetMapping("/schedules/getschedules")
    public ResponseEntity<List<Schedule>> getAllSchedules() {
        return ResponseEntity.ok(scheduleSlotService.getAllSchedules());
    }

    @PostMapping("/booking/darshanbooking")
    public ResponseEntity<DevoteeBooking> bookSlot(
            @RequestParam String date,
            @RequestParam String slot,
            @RequestBody DevoteeBooking request) {
        return ResponseEntity.ok(scheduleSlotService.createBookingAndUpdateSlot(date, slot, request));

    }
     
    @GetMapping("/booking/getbooking")
    public ResponseEntity<List<DevoteeBooking>> getBookingbyUser_name(@RequestParam String username){
    	String s = username;
    	System.out.println(s);
    	return  ResponseEntity.ok(scheduleSlotService.getbookingbyuserName(username));
    }
    
  
    @PostMapping("/booking/poojabooking")
    public ResponseEntity<DevoteeBooking> bookPoojaSlot(
    		@RequestParam("date") String date,
    		@RequestParam("slot") String slot,
    		@RequestBody DummyDevotee request){
    
    	return ResponseEntity.ok(scheduleSlotService.createPoojaBookingAndUpdateSlot(date,slot,request));
    }
    
    
    @GetMapping("/booking/all-bookings")
    public ResponseEntity<List<DevoteeBooking>> allBooking(){
    	return ResponseEntity.ok(scheduleSlotService.getBookings());
    }

}
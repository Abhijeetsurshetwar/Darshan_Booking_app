package com.microservice.bookingservice.controller;

import com.microservice.bookingservice.entities.DevoteeBooking;
import com.microservice.bookingservice.entities.DummyDevotee;
import com.microservice.bookingservice.entities.Schedule;
import com.microservice.bookingservice.service.ScheduleSlotService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ScheduleSlotController {

    @Autowired
    private ScheduleSlotService scheduleSlotService;

    @PostMapping("/schedules/createScheduleWithDates")
    public ResponseEntity<Schedule> createScheduleWithDates(@RequestBody Schedule schedule) {
        System.out.println(schedule);
        return ResponseEntity.ok(scheduleSlotService.createScheduleWithDates(schedule));
    }

    @GetMapping("/schedules")
    public ResponseEntity<List<Schedule>> getAllSchedules() {
        return ResponseEntity.ok(scheduleSlotService.getAllSchedules());
    }

    @PostMapping("/booking")
    public ResponseEntity<DevoteeBooking> bookSlot(
            @RequestParam String date,
            @RequestParam String slot,
            @RequestBody DevoteeBooking request) {
        return ResponseEntity.ok(scheduleSlotService.createBookingAndUpdateSlot(date, slot, request));

    }
     
    @GetMapping("/getbooking")
    public ResponseEntity<List<DevoteeBooking>> getBookingbyUser_name(@RequestParam String username){
    	String s = username;
    	System.out.println(s);
    	return  ResponseEntity.ok(scheduleSlotService.getbookingbyuserName(username));
    }
    
  
    @PostMapping("/poojabooking")
    public ResponseEntity<DevoteeBooking> bookPoojaSlot(
    		@RequestParam("date") String date,
    		@RequestParam("slot") String slot,
    		@RequestBody DummyDevotee request){
    
    	return ResponseEntity.ok(scheduleSlotService.createPoojaBookingAndUpdateSlot(date,slot,request));
    }
    
    
    @GetMapping("all-bookings")
    public ResponseEntity<List<DevoteeBooking>> allBooking(){
    	return ResponseEntity.ok(scheduleSlotService.getBookings());
    }

}
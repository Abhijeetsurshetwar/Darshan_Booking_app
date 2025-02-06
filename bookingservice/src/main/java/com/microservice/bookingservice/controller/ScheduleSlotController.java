package com.microservice.bookingservice.controller;


import com.microservice.bookingservice.entities.DevoteeBooking;
import com.microservice.bookingservice.entities.DummyDevotee;
import com.microservice.bookingservice.entities.Schedule;
import com.microservice.bookingservice.service.ScheduleSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
            @RequestParam("date") String date,
            @RequestParam("slot") String slot,
            @RequestBody DevoteeBooking request) {
        return ResponseEntity.ok(scheduleSlotService.createBookingAndUpdateSlot(date, slot, request));

    }
    
    @PostMapping("/poojabooking")
    public ResponseEntity<DevoteeBooking> bookPoojaSlot(
    		@RequestParam("date") String date,
    		@RequestParam("slot") String slot,
    		@RequestBody DummyDevotee request){
    
    	return ResponseEntity.ok(scheduleSlotService.createPoojaBookingAndUpdateSlot(date,slot,request));
    }

}
package com.microservice.bookingservice.service;



import com.microservice.bookingservice.entities.DevoteeBooking;
import com.microservice.bookingservice.entities.DummyDevotee;
import com.microservice.bookingservice.entities.Schedule;
import com.microservice.bookingservice.entities.ScheduleDate;
import com.microservice.bookingservice.entities.Slot;
import com.microservice.bookingservice.repository.DevoteeBookingRepository;
import com.microservice.bookingservice.repository.ScheduleDateRepository;
import com.microservice.bookingservice.repository.ScheduleRepository;
import com.microservice.bookingservice.repository.SlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ScheduleSlotService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ScheduleDateRepository scheduleDateRepository;

    @Autowired
    private DevoteeBookingRepository devoteeBookingRepository;

    @Autowired
    private SlotRepository slotRepository;

    public Schedule createScheduleWithDates(Schedule schedule) {
        if (schedule.getScheduleDates() != null) {
            schedule.getScheduleDates().forEach(scheduleDate -> {
                scheduleDate.setSchedule(schedule);
                if (scheduleDate.getSlots() != null) {
                    scheduleDate.getSlots().forEach(slot -> slot.setScheduleDate(scheduleDate));
                }
            });
        }
        return scheduleRepository.save(schedule);
    }

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }


    public DevoteeBooking processSlotBook(String date, String slot, DevoteeBooking devoteeBooking){
        devoteeBooking.setBookingId(createBookingId());
        devoteeBooking.setSlot(slot);
        devoteeBooking.setDate(date);
        return devoteeBookingRepository.save(devoteeBooking);
    }

    public DevoteeBooking getBookingById(Long bookingId) {
        Optional<DevoteeBooking> optionalBooking = devoteeBookingRepository.findById(bookingId);
        return optionalBooking.orElseThrow(() -> new RuntimeException("Booking ID " + bookingId + " not found"));

    }

    private long generateRandomBookingId() {
        Random random = new Random();
        return (long) (random.nextDouble() * 1_000_000_000_000_000L); // Generates a random 15-digit number
    }

    @Transactional
    public DevoteeBooking createBookingAndUpdateSlot(String date, String slot, DevoteeBooking request) {

        DevoteeBooking devoteeBooking = null;
        try {
            reduceVacancy(date, slot, request.getTotalDevotee());
            devoteeBooking = processSlotBook(date, slot, request);
        }
        catch (Exception e){
            throw new RuntimeException("Booking Service is down ");
        }
        return getBookingById(devoteeBooking.getBookingId());
    }

    public void reduceVacancy(String date, String slot, Integer totalDevotee) {
        ScheduleDate scheduleDate = scheduleDateRepository.findByDate(date);
        if (scheduleDate == null) {
            throw new RuntimeException("Schedule not found for date: " + date);
        }

        Slot slotReduce = scheduleDate.getSlots().stream()
                .filter(s -> s.getTime().equals(slot))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Slot not found for time: " + slot));

        if (slotReduce.getVacancy() >= totalDevotee) {
            slotReduce.setVacancy(slotReduce.getVacancy() - totalDevotee);
            slotRepository.save(slotReduce); // Persist the updated slot
        } else {
            throw new RuntimeException("Not enough vacancy to reduce by " + totalDevotee);
        }

    }
    
    @Transactional
    public DevoteeBooking createPoojaBookingAndUpdateSlot(String date, String slot, DummyDevotee request) {
    	DevoteeBooking devoteebooking = null;
    	try {
    		reduceVacancy(date, slot, request.getTotalDevotee());
    		devoteebooking = processPoojaSlotBook(date,slot,request);
    		
    	}catch(Exception e) {
    		throw new RuntimeException("Pooja Booking service is down");
    	}
    	
    	return getBookingById(devoteebooking.getBookingId());
    }
    
    public DevoteeBooking processPoojaSlotBook(String date,String slot,DummyDevotee DevoteeBooking) {
    	DevoteeBooking devotee = new DevoteeBooking();
    	devotee.setUserName(DevoteeBooking.getUserName());
    	devotee.setBookingId(createBookingId());
    	devotee.setSlot(slot);
    	devotee.setDate(date);
    	
        return devoteeBookingRepository.save(devotee);
    }
    
    public long createBookingId() {
        long bookingId = generateRandomBookingId();

        // Check if the generated booking ID already exists in the database
        while (devoteeBookingRepository.existsById(bookingId)) {
            bookingId = generateRandomBookingId(); // Regenerate ID if exists
        }

        return bookingId; // Return unique booking ID
    }


}
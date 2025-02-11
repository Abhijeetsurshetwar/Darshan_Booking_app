package com.microservice.bookingservice.service;


import com.microservice.bookingservice.entities.DummyDevotee;
import com.microservice.bookingservice.entities.DevoteeBooking;

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


    
    public Schedule addScheduleDates(int scheduleId, List<ScheduleDate> scheduleDates) {
        // Fetch the existing Schedule
        Schedule existingSchedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id: " + scheduleId));

        // Assign new ScheduleDates to the existing Schedule
        for (ScheduleDate scheduleDate : scheduleDates) {
            scheduleDate.setSchedule(existingSchedule);
            if (scheduleDate.getSlots() != null) {
                for (Slot slot : scheduleDate.getSlots()) {
                    slot.setScheduleDate(scheduleDate);
                }
            }
            existingSchedule.getScheduleDates().add(scheduleDate);
        }

        // Save updated Schedule
        return scheduleRepository.save(existingSchedule);
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
        		e.printStackTrace();
//            throw new RuntimeException("Booking Service is down ");
        }
        return getBookingById(devoteeBooking.getBookingId());
    }

    //To reduce the vacancy of slots for Darshan
    public void reduceVacancy(String date, String slot, Integer totalDevotee) {
        ScheduleDate scheduleDate = scheduleDateRepository.findByDateAndSchedule_Id(date,2l);
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
    
    //To reduce the vacancy for Poojabooking
    public void reducePoojaVacancy(String date,String slot,Integer totalDevotee) {
    	ScheduleDate scheduleDate = scheduleDateRepository.findByDateAndSchedule_Id(date, 1l);
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
    	System.out.println(date + " " + slot);
    	DevoteeBooking devoteebooking = null;
    	try {
    		reducePoojaVacancy(date, slot, request.getTotalDevotee());
    		devoteebooking = processPoojaSlotBook(date,slot,request);
    		
    	}catch(Exception e) {
    		e.printStackTrace();	
    		}
    	
    	return getBookingById(devoteebooking.getBookingId());
    }
    
    //Process for pooja Booking
    public DevoteeBooking processPoojaSlotBook(String date,String slot,DummyDevotee DevoteeBooking) {
    	DevoteeBooking devotee = new DevoteeBooking();
    	devotee.setUserName(DevoteeBooking.getUserName());
    	devotee.setBookingId(createBookingId());
    	devotee.setSlot(slot);
    	devotee.setDate(date);
    	devotee.setTotalDevotee(DevoteeBooking.getTotalDevotee());
        return devoteeBookingRepository.save(devotee);
    }
    
    //To generate the random pooja
    public long createBookingId() {
        long bookingId = generateRandomBookingId();

        // Check if the generated booking ID already exists in the database
        while (devoteeBookingRepository.existsById(bookingId)) {
            bookingId = generateRandomBookingId(); // Regenerate ID if exists
        }

        return bookingId; // Return unique booking ID
    }

    
    
    public List<DevoteeBooking> getbookingbyuserName(String username){
    	return devoteeBookingRepository.findByUserName(username);
    }

	public List<DevoteeBooking> getBookings() {
		// TODO Auto-generated method stub
		return devoteeBookingRepository.findAll();
	}

}
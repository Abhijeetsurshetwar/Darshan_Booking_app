package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingServices;

@RestController
public class BookingController {

	@Autowired
	BookingServices bserv;
	
	
	@GetMapping("/getAllBooking")
	public List<Booking> GetBooking(){
		return bserv.GetAllBookings();
	}
}

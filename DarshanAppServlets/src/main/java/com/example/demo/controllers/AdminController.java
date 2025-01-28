package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.User;
import com.example.demo.services.AdminServices;
import com.example.demo.services.UserServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	
	@Autowired 
	private UserServices userservice;
	
	@Autowired
	private AdminServices adminservice;
	
	@GetMapping("/all-users")
	public ResponseEntity<List<User>> getalluser() {
		List<User> li =  userservice.getAllUsers();
		
		return new ResponseEntity<>(li,HttpStatus.OK);
	}
	
	
	@GetMapping("/all-bookings")
	public ResponseEntity<List<Booking>> getBooking(){
			List<Booking> bookinglist = adminservice.getBookings(); 
			
			return new ResponseEntity<List<Booking>>(bookinglist, HttpStatus.OK);
//			if(bookinglist != null  && !bookinglist.isEmpty()) {
//				
//			}
//			else {
//				return new ResponseEntity(HttpStatus.BAD_REQUEST);
//			}
		
	}
}

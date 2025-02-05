package com.microservice.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.microservice.bookingservice.entities.Donation;
import com.microservice.bookingservice.service.DonationService;

@Controller
@RequestMapping("/donation")
public class DonationController {

	@Autowired
	private DonationService donationservice;
	
	@PostMapping("/bookdonation")
	public ResponseEntity<Donation> bookDonation(
			@RequestBody Donation request) {
			
		return ResponseEntity.ok(donationservice.bookDontaion(request));
	}
	
	@GetMapping("/alldonation")
	public ResponseEntity<List<Donation>> allDonation(){
		return ResponseEntity.ok(donationservice.getAllDonation());
	}
	
	
}

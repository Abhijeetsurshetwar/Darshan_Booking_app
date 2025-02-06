package com.microservice.bookingservice.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.bookingservice.entities.Donation;
import com.microservice.bookingservice.repository.DonationRepository;

import jakarta.transaction.Transactional;

@Service
public class DonationService {
	
	@Autowired
	private DonationRepository donationrepository;
	
	
	
	public List<Donation> getAllDonation(){
		return donationrepository.findAll();
	}
	
	public Optional<Donation> getDonationByName(String Name){
		return donationrepository.findDonationByUserName(Name);
	}
	@Transactional
	public Donation bookDontaion(Donation request) {
		Donation donate = new Donation();
		
		donate.setId(generateRandomDonationId());
		donate.setAmmount(request.getAmmount());
		donate.setPurpose(request.getPurpose());
		donate.setUser_name(request.getUser_name());
		
		return donationrepository.save(donate);
	}
	
	private long generateRandomDonationId() {
        Random random = new Random();
        return (long) (random.nextDouble() * 1_000_000_000_000_000L); // Generates a random 15-digit number
    }
}
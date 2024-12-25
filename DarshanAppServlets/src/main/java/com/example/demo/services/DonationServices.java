package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Donation;
import com.example.demo.repository.DonationRepositories;

@Service
public class DonationServices {

    @Autowired
    private DonationRepositories donationRepository;

    //  all Donations
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    //  Donation by ID
    public Donation getDonationById(int id) {
        return donationRepository.findById(id).orElse(null);
    }

  
}
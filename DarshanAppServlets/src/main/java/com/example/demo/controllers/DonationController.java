package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Donation;
import com.example.demo.services.DonationServices;

@RestController
@RequestMapping("/donations")
public class DonationController {

    @Autowired
    private DonationServices donationService;

    // Get all Donations
    @GetMapping
    public List<Donation> getAllDonations() {
        return donationService.getAllDonations();
    }

    // Get Donation by ID
    @GetMapping("/{id}")
    public Donation getDonationById(@PathVariable int id) {
        return donationService.getDonationById(id);
    }

}
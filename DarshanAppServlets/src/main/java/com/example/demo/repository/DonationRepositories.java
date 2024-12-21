package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Donation;

@Repository
public interface DonationRepositories extends JpaRepository<Donation, Integer> {
}

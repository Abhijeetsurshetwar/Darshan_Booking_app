package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
package com.microservice.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.bookingservice.entities.Slot;

public interface SlotRepository extends JpaRepository<Slot, Long> {
}

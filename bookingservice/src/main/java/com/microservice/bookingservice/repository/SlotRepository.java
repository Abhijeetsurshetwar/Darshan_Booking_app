package com.microservice.bookingservice.repository;

import com.microservice.bookingservice.model.Slot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SlotRepository extends JpaRepository<Slot, Long> {
}

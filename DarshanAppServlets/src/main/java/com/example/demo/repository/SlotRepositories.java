package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Slot;
@Repository

public interface SlotRepositories extends JpaRepository<Slot, Integer> {

}
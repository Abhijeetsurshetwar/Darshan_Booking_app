package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Accomodation;
@Repository
public interface AccomodationRepositories extends JpaRepository<Accomodation, Integer> {

}

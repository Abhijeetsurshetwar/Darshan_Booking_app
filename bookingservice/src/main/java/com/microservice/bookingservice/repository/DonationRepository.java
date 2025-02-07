package com.microservice.bookingservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.microservice.bookingservice.entities.Donation;

@Repository
public interface DonationRepository extends JpaRepository<Donation,Long>{

	@Query("SELECT d FROM donation d WHERE d.user_name = :name")
	Optional<Donation> findDonationByUserName(@Param("name") String name);

}
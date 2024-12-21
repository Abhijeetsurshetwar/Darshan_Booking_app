package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Accomodation;
import com.example.demo.repository.AccomodationRepo;

@Service
public class AccomodationService {
	@Autowired
	AccomodationRepo accrepo;
	
	public List<Accomodation> getallaccomodation(){
		return accrepo.findAll();
		
	}
	

}

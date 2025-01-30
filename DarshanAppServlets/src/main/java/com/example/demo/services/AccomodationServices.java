package com.example.demo.services;


import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.example.demo.entities.Accomodation;
import com.example.demo.repository.AccomodationRepositories;

import jakarta.transaction.Transactional;

@Service
public class AccomodationServices {
	@Autowired
	AccomodationRepositories accrepo;
	
	public List<Accomodation> getallaccomodation(){
		return accrepo.findAll();
		
	}
	
	@Transactional
	public Accomodation insertAccomodation( HashMap<String, String> newAccomodation) {
		
		Accomodation newAcc = new Accomodation();
		
		newAcc.setAddress(newAccomodation.get("address"));
		newAcc.setAvailability(newAccomodation.get("availability"));
		newAcc.setContactno(newAccomodation.get("contactno"));
		newAcc.setName(newAccomodation.get("name"));
		System.out.println(newAcc);
		Accomodation result = accrepo.save(newAcc);		
		return result;
	}
}

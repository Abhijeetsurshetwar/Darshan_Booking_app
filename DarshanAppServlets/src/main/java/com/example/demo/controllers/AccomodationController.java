package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Accomodation;
import com.example.demo.services.AccomodationServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class AccomodationController {
	@Autowired
	AccomodationServices accser;
	
	@GetMapping("/getaccc")
	public List<Accomodation> getAccomodation(){
		return accser.getallaccomodation();
	}
	
	
	

}

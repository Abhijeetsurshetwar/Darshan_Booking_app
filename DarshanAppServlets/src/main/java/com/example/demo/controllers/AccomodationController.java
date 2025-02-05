package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Accomodation;
import com.example.demo.services.AccomodationServices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;




import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
@CrossOrigin(origins = "http://localhost:3000")



@RestController
@RequestMapping("/admin")
public class AccomodationController {
	@Autowired
	AccomodationServices accser;
	
	@GetMapping("/getaccc")
	public List<Accomodation> getAccomodation(){
		return accser.getallaccomodation();
	}
	
	
	@PostMapping("/insert-accomodation")
	public ResponseEntity<Accomodation> insertAccomodation(@RequestBody HashMap<String,String> newAccomodation) {
		
		System.out.println(newAccomodation.get("Name"));
		System.out.println(newAccomodation.get("address"));

		Accomodation res =  accser.insertAccomodation(newAccomodation);
		return new ResponseEntity<Accomodation>(res, HttpStatus.CREATED);
	}
}

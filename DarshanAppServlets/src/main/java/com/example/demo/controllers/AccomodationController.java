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

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/admin")
@RestController
public class AccomodationController {
	@Autowired
	AccomodationServices accser;
	
	@GetMapping("/getaccc")
	public List<Accomodation> getAccomodation(){
		return accser.getallaccomodation();
	}
	
	
	@PostMapping("/insert-accomodation")
	public ResponseEntity<Accomodation> insertAccomodation(@RequestBody HashMap<String,String> newAccomodation) {
	
		Accomodation res =  accser.insertAccomodation(newAccomodation);
		return new ResponseEntity<Accomodation>(res, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete-accomodation")
	public ResponseEntity<Accomodation> deleteAccomodation(@RequestBody HashMap<String,String> delAccomodation){
			accser.deleteAccomodation(delAccomodation);
		return new ResponseEntity<Accomodation>(HttpStatus.OK);
	}
}

package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Devotee;
import com.example.demo.entities.User;
import com.example.demo.services.DevoteeServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/devotees")
public class DevoteeController {

    @Autowired
    private DevoteeServices devoteeService;
    


    // Get all Devotees
    @GetMapping("/getDevotees")
    public List<Devotee> getAllDevotees() {
        return devoteeService.getAllDevotees();
    }
    


    // Get Devotee by ID
    @GetMapping("/{id}")
    public Devotee getDevoteeById(@PathVariable int id) {
        return devoteeService.getDevoteeById(id);
    }

    
    @PostMapping("/insertDevotee")
<<<<<<< Updated upstream
    public Devotee insertUser(@RequestBody HashMap<String, String> Mapu) {
    	
    	return devoteeService.insertDevotee(Mapu);
    	
=======
    public ResponseEntity<String> insertUser(@RequestBody HashMap<String, String> Mapu) {
    	
    	devoteeService.insertDevotee(Mapu);
    	return ResponseEntity.status(HttpStatus.OK).body("Login Successfull");
>>>>>>> Stashed changes
    }

    
    @PostMapping("/insertDevotee")
    public ResponseEntity<String> insertUser(@RequestBody HashMap<String, String> Mapu) {
    	
    	devoteeService.insertDevotee(Mapu);
    	return ResponseEntity.status(HttpStatus.OK).body("Login Successfull");
    }


  
}

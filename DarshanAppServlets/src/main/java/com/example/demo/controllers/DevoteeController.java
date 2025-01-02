package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Devotee insertUser(@RequestBody HashMap<String, String> Mapu) {
    	
    	return devoteeService.insertDevotee(Mapu);
    	
    }

    
    @PostMapping("/insertDevotee")
    public void insertUser(@RequestBody HashMap<String, String> Mapu) {
    	
    	devoteeService.insertDevotee(Mapu);
    	
    }


  
}

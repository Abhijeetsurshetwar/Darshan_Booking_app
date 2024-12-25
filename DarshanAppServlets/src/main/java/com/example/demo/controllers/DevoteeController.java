package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Devotee;
import com.example.demo.services.DevoteeServices;
import com.example.demo.services.UserServices;

@RestController
@RequestMapping("/devotees")
public class DevoteeController {

    @Autowired
    private DevoteeServices devoteeService;
    
    @Autowired
    private UserServices userservices;

    // Get all Devotees
    @GetMapping("/getDevotees")
    public List<Devotee> getAllDevotees() {
        return devoteeService.getAllDevotees();
    }
    
    @PostMapping("/insert")
    public Devotee insertDevotee(@RequestBody Devotee devotee) {
    	
    	System.out.println(devotee);
    	
    	return devoteeService.insertDevotee(devotee);
    }

    // Get Devotee by ID
    @GetMapping("/{id}")
    public Devotee getDevoteeById(@PathVariable int id) {
        return devoteeService.getDevoteeById(id);
    }

  
}

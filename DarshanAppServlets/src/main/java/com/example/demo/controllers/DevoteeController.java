package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Devotee;
import com.example.demo.services.DevoteeServices;
import com.example.demo.services.UserServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/devotees")
public class DevoteeController {

    @Autowired
    private DevoteeServices devoteeService;
<<<<<<< Updated upstream
    
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

=======
       
>>>>>>> Stashed changes
    // Get Devotee by ID
    @GetMapping("/{id}")
    public Devotee getDevoteeById(@PathVariable int id) {
        return devoteeService.getDevoteeById(id);
    }
<<<<<<< Updated upstream
=======
    
    @PostMapping("/insertDevotee")
    public Devotee insertUser(@RequestBody HashMap<String, String> Mapu) {
    	
    	return devoteeService.insertDevotee(Mapu);
    	
    }
>>>>>>> Stashed changes

  
}

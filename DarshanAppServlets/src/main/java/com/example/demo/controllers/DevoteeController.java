package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Devotee;
import com.example.demo.entities.User;
import com.example.demo.services.DevoteeServices;
import com.example.demo.services.UserServices;

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
    public void insertUser(@RequestBody HashMap<String, String> Mapu) {
    	int Did = 1000 + (int)(Math.random() * 9000);
    	User user =new User();
    	user.setUname(Mapu.get("uname"));
    	user.setPassword(Mapu.get("password"));
    	user.setRole(Mapu.get("role"));
    	
    	Devotee devotee = new Devotee();
    	devotee.setAge(Integer.parseInt(Mapu.get("age")));
    	devotee.setContactNo(Mapu.get("contactNo"));
    	devotee.setEmail(Mapu.get("email"));
    	devotee.setGender(Mapu.get("gender"));
    	devotee.setUser(user);
    	devotee.setDid(Did);
    	
    	user.setDevotee(devotee);
    	
    	devoteeService.insertDevotee(devotee);
    	
    }

  
}

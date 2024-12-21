package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Devotee;
import com.example.demo.services.DevoteeServices;

@RestController
@RequestMapping("/devotees")
public class DevoteeController {

    @Autowired
    private DevoteeServices devoteeService;

    // Get all Devotees
    @GetMapping
    public List<Devotee> getAllDevotees() {
        return devoteeService.getAllDevotees();
    }

    // Get Devotee by ID
    @GetMapping("/{id}")
    public Devotee getDevoteeById(@PathVariable int id) {
        return devoteeService.getDevoteeById(id);
    }

  
}

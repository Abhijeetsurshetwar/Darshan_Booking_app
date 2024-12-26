package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Devotee;
import com.example.demo.entities.User;
import com.example.demo.services.UserServices;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServices userService;

    // Get all Users
    @GetMapping("/getemps")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    

    
    // Get User by ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }


}
 	
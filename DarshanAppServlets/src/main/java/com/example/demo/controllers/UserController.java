package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User loggedInUser = userService.validateUser(user.getUname(), user.getPassword());
        System.out.println(user.getUname());
        System.out.println(user.getPassword());
        if (loggedInUser != null) {
            return loggedInUser.getRole(); 
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid Credentials");
        }

    }
    
}
 	
package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.User;
import com.example.demo.repository.UserRepositories;

@Service
public class UserServices {

    @Autowired
    private UserRepositories userRepository;

    // all Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //  User by ID
    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

}

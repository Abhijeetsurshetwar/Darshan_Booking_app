package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Devotee;
import com.example.demo.entities.User;
import com.example.demo.repository.DevoteeRepositories;
import com.example.demo.repository.UserRepositories;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class UserServices {

    @Autowired
    private UserRepositories userrepo;
   
  
    // all Users
    public List<User> getAllUsers() {
        return userrepo.findAll();
    }

    
    public void insertuser(User user) {
    	userrepo.save(user);
    }

    
    //  User by ID
    public User getUserById(int id) {
        return userrepo.findById(id).orElse(null);
    }
    
    // Use repository to find the user by username and password
    public User validateUser(String uname, String password) {
        return userrepo.findByUnameAndPassword(uname, password);
    }


}

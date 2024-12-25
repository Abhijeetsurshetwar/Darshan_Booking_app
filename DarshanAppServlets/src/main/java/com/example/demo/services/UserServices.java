package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.User;
import com.example.demo.repository.UserRepositories;

@Service
public class UserServices {

    @Autowired
    private UserRepositories userrepo;

    // all Users
    public List<User> getAllUsers() {
        return userrepo.findAll();
    }

    
    public User insertuser(User user) {
    	return userrepo.save(user);
    }
    //  User by ID
    public User getUserById(int id) {
        return userrepo.findById(id).orElse(null);
    }
    
    public int getuid(String Uname) {
    	return userrepo.getuid(Uname);
    }

}

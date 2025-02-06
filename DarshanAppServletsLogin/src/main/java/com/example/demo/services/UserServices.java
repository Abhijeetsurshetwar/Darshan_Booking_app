package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 import com.example.demo.entities.User;
 import com.example.demo.repository.UserRepositories;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class UserServices {

    @Autowired
    private UserRepositories userrepo;
   
    @Autowired
    private UserService userservice;
  
    // all Users
    public List<User> getAllUsers() {
        return userrepo.findAll();
    }

    
    public void insertuser(User user) {
    	String encrypString = userservice.encryptPassword(user.getPassword());
    	System.out.println(encrypString);
    	userrepo.save(user);
    }

    
    //  User by ID
    public User getUserById(int id) {
        return userrepo.findById(id).orElse(null);
    }
    
    // Use repository to find the user by username and password
    public User validateUser(String uname, String password) {
    	
    	System.out.println(userservice.encryptPassword(password));
    	
    	Optional<User> user = userrepo.findByUname(uname);
    	if (user.isPresent() && userservice.checkPassword(password, user.get().getPassword())) {
    	    return user.get();
    	} else {
    	    throw new RuntimeException("Invalid credentials");
    	}

    }


}

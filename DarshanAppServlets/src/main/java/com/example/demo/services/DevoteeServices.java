package com.example.demo.services;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties.Transaction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;

import com.example.demo.entities.Devotee;
import com.example.demo.entities.User;
import com.example.demo.repository.DevoteeRepositories;

import jakarta.transaction.TransactionManager;
import jakarta.transaction.Transactional;
@Service
public class DevoteeServices {

	
    @Autowired
    private DevoteeRepositories devoteeRepository;


    public List<Devotee> getAllDevotees() {
        return devoteeRepository.findAll();
    }

    public Devotee getDevoteeById(int id) {
        return devoteeRepository.findById(id).orElse(null);
    }


  
    @Transactional
    public void insertDevotee(HashMap<String, String> Mapu) {
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
    	
    	devoteeRepository.save(devotee);
    }
    
    @Transactional
    public Devotee updateDevotee(int id, Devotee updatedDevotee) {
    	 Devotee existingDevotee = devoteeRepository.findById(id).orElse(null);
         if (existingDevotee != null) {
            
             existingDevotee.setAge(updatedDevotee.getAge());
             existingDevotee.setGender(updatedDevotee.getGender());
             existingDevotee.setEmail(updatedDevotee.getEmail());
             existingDevotee.setContactNo(updatedDevotee.getContactNo());

             if (updatedDevotee.getUser() != null) {
                 User existingUser = existingDevotee.getUser();
                 User updatedUser = updatedDevotee.getUser();

                 existingUser.setUname(updatedUser.getUname());
                 existingUser.setPassword(updatedUser.getPassword());
                 existingUser.setRole(updatedUser.getRole());

                 existingDevotee.setUser(existingUser);
             }

             return devoteeRepository.save(existingDevotee);
         } 
         return null;
    }
}

package com.example.demo.services;

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
    public void insertDevotee(Devotee devotee) {
		
    	devoteeRepository.save(devotee);
    }
    
    
}

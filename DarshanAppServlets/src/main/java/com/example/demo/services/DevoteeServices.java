package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Devotee;
import com.example.demo.repository.DevoteeRepositories;

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

    public Devotee insertDevotee(Devotee devotee) {
    	return devoteeRepository.save(devotee);
    }
}

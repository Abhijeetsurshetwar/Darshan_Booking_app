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

<<<<<<< Updated upstream
 
    public List<Devotee> getAllDevotees() {
        return devoteeRepository.findAll();
    }
=======
>>>>>>> Stashed changes
    public Devotee getDevoteeById(int id) {
        return devoteeRepository.findById(id).orElse(null);
    }

<<<<<<< Updated upstream
    public Devotee insertDevotee(Devotee devotee) {
=======
  
    @Transactional
    public Devotee insertDevotee(HashMap<String, String> Mapu) {
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
    	
    	
>>>>>>> Stashed changes
    	return devoteeRepository.save(devotee);
    }
}

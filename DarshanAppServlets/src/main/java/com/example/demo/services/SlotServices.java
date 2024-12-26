package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Slot;
import com.example.demo.repository.SlotRepositories;

@Service
public class SlotServices {

	@Autowired
	SlotRepositories srepo;
	
	public List<Slot> getallslot(){
		return srepo.findAll();
	}
}
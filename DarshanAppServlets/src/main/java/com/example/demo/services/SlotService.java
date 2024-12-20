package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Slot;
import com.example.demo.repository.SlotRepo;

@Service
public class SlotService {

	@Autowired
	SlotRepo srepo;
	
	public List<Slot> getallslot(){
		return srepo.findAll();
	}
}

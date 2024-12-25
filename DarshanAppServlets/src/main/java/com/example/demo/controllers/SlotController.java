
package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Slot;
import com.example.demo.services.SlotServices;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class SlotController {
	@Autowired
	SlotServices sser;

	
	@GetMapping("/getAllSlot")
	public List<Slot> getSlots() {
		return sser.getallslot();
	}
	

}

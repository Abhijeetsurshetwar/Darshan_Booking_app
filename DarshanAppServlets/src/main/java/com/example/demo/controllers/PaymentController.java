package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Payment;
import com.example.demo.services.PaymentServices;

@RestController
public class PaymentController {

	@Autowired
	PaymentServices payserv;
	
	@GetMapping("/getAllPayment")
	public List<Payment> getAllPayment() {
		return payserv.getAllPayment();
	}
}
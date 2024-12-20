package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Payment;
import com.example.demo.repository.PaymentRepository;

@Service
public class PaymentServices {

	@Autowired
	PaymentRepository payrepo;
	
	public List<Payment> getAllPayment(){
		return payrepo.findAll();
	}
}

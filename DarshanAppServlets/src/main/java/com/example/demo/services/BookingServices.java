package com.example.demo.services;

import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.User;
import com.example.demo.repository.BookingRepository;


@Service
public class BookingServices {

	@Autowired
	BookingRepository brepo;
	
	public List<Booking> GetAllBookings(){
		return brepo.findAll();
	}
	
//	public void Booking(HashMap<String,User>map) {
//		String payid = generatePaymentID();
//		int bid =(int)Math.random()*10000;
//		
//		
//	}
//	   public static String generatePaymentID() {
//	        Random random = new Random();
//	        int randomNum = 100000 + random.nextInt(900000); 
//	        long timestamp = System.currentTimeMillis(); 
//	        return "PAY" + timestamp + randomNum;
//	    }
}

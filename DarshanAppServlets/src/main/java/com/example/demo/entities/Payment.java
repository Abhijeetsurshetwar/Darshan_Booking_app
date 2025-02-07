package com.example.demo.entities;

import java.sql.Date;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
@Table(name = "payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PayID")
	String payid;
	
	@Column(name = "Date")
	Date date;
	
	@Column(name = "Type")
	String type;
	
	
	@Column(name="amount")
	double amount;
	
    
    @ManyToOne
    @JoinColumn(name = "DID")
    private Devotee devotee;

//    @OneToMany(mappedBy = "payment", cascade = CascadeType.ALL)
//    private List<Booking> bookings;
//    
//    
//    @OneToOne(mappedBy = "payment", cascade = CascadeType.ALL)
//    private Donation donation;
//    

}

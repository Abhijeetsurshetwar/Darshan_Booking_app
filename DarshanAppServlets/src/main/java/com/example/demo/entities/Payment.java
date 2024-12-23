package com.example.demo.entities;

import java.sql.Date;

import java.util.List;
import java.util.jar.Attributes.Name;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OneToMany;
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
	
	@Column(name = "DID")
	int did;
	
	@Column(name="amount")
	double amount;
	
	@OneToMany(mappedBy = "payment", cascade = CascadeType.ALL)
	private List<Booking> bookings;
	
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="did")
    private Donation donation;
    
    
    @ManyToOne
    @JoinColumn(name = "DID")
    private Devotee devotee;


}

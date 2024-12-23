 	package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BID")
	int bid;
	
	@Column(name = "Name")
	String name;
	
	@Column(name = "Age")
	int age;
	
	@Column(name = "Gender")
	String gender;
	
	@Column(name = "DID")
	int did;
	
	@Column(name = "SID")
	int sid;
	
	@Column(name = "PayID")
	String payid;
	
	@Column(name = "BDate")
	Date bdate;
	
	@Column(name = "BType")
	String btype;

<<<<<<< Updated upstream
=======
	@ManyToOne
	@JoinColumn(name = "DID", referencedColumnName = "DID")
	private Devotee devotee;
	
	@ManyToOne
	@JoinColumn(name = "PayID", referencedColumnName = "PayID")
	private Payment payment;

	@ManyToOne
	@JoinColumn(name = "SID")
	private Slot slot; 
>>>>>>> Stashed changes
}

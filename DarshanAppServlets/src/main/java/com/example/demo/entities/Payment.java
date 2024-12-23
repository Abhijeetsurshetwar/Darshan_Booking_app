package com.example.demo.entities;

import java.sql.Date;
<<<<<<< Updated upstream
=======
import java.util.List;
import java.util.jar.Attributes.Name;
<<<<<<< Updated upstream
>>>>>>> Stashed changes

=======
>>>>>>> Stashed changes

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
	
	@OneToMany(mappedBy = "payment", cascade = CascadeType.ALL)
	private List<Booking> bookings;

	
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="did")
    private Donation donation;
    
    
    @ManyToOne
    @JoinColumn(name = "DID")
    private Devotee devotee;

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}

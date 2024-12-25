package com.example.demo.entities;

//import java.util.List;
//
//import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="slot")

public class Slot {
	@Id
	int sid;
	String sname;
	char type;
	int capacity;
	

	
//	@OneToMany(mappedBy = "slot", cascade = CascadeType.ALL)
//	private List<Booking> bookings;
	


}
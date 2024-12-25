package com.example.demo.entities;

 
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "devotee")
public class Devotee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DID")
    private int did;

    @Column(name = "Age", nullable = false)
    private int age;

    @Column(name = "Gender", nullable = false)
    private String gender;

    @Column(name = "Email", nullable = false, unique = true)
    private String email;

    @Column(name = "Contactno", nullable = false, unique = true)
    private String contactNo;
    
    //Done
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "UID")
    private User user;
    
    
    //Done taking instance of donation to retrieve all Donations
    @JsonIgnoreProperties("devotee")
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Donation> donation;
    

    
  //Done taking instance of Payments to retrieve all Bookings
    @JsonIgnoreProperties("devotee")
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Booking> bookings;
    
}

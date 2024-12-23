package com.example.demo.entities;

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

    @Column(name = "UID", nullable = false)
    private int uid; 

    
    //Done
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "UID")
    private User user;
    
    
    //Done taking instance of donation to retrieve all without a foreign key
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Donation> donation;
        
    //Done taking instance of Payments to retrieve all without a foreign key
    @OneToMany(mappedBy = "devotee" , cascade =CascadeType.ALL)
    private List<Payment> payments;
    
    @OneToOne
    @JoinColumn(name = "UID", referencedColumnName = "UID")
    private User user;
    
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Booking> bookings;
    
    @ManyToOne
    @JoinColumn(name = "DID", referencedColumnName = "DID")
    private Devotee devotee;



}

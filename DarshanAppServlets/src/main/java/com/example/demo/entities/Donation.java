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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "donation")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "donid")
    private int donid;

    @Column(name = "Purpose", nullable = false)
    private String purpose;

    @Column(name = "payid", nullable = false)
    private int payid;

    @Column(name = "did", nullable = false)
    private int did; 
    
    //Done taking instance of devotee to retrieve all without a foreign key
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Donation> donations;
    
    //Done
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "did")
    private Devotee devotee;

    //Done taking instance of donation to retrieve all without a foreign key
    @OneToOne(mappedBy = "donation" , cascade = CascadeType.ALL)
    private Donation donation;
    
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Donation> donations;
    
    @ManyToOne
    @JoinColumn(name = "DID", referencedColumnName = "DID")
    private Devotee devotee;


}

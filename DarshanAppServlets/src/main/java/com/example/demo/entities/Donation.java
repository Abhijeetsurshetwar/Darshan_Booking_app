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

    
    @ManyToOne(cascade = CascadeType.ALL )
    @JoinColumn(name = "did")
    @JsonIgnoreProperties("did")
    private Devotee devotee;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name ="payid")
    private Payment payment;
    
//    @Column(name = "payid", nullable = false)
//    private int payid;
//
//    @Column(name = "did", nullable = false)
//    private int did; 
    
}

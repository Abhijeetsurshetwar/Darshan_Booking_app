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
    
    @OneToMany(mappedBy = "devotee", cascade = CascadeType.ALL)
    private List<Donation> donations;
    
    @ManyToOne
    @JoinColumn(name = "DID", referencedColumnName = "DID")
    private Devotee devotee;


}

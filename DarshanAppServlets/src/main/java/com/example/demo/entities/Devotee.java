package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
}

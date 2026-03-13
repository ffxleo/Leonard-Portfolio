package com.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "person")
public class Person {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String email;
    
    private String phone;
    private String address;
    
    @Column(length = 1000)
    private String objective;
    
    // Constructors
    public Person() {}
    
    public Person(String name, String email, String phone, String address, String objective) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.objective = objective;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    
    public String getObjective() { return objective; }
    public void setObjective(String objective) { this.objective = objective; }
}

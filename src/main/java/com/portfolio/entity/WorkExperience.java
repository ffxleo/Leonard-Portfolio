package com.portfolio.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "work_experience")
public class WorkExperience {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String company;
    
    private String location;
    private String position;
    private String dateRange;
    
    @ElementCollection
    @CollectionTable(name = "work_responsibilities", joinColumns = @JoinColumn(name = "work_experience_id"))
    @Column(name = "responsibility", length = 500)
    private List<String> responsibilities = new ArrayList<>();
    
    // Constructors
    public WorkExperience() {}
    
    public WorkExperience(String company, String location, String position, String dateRange, List<String> responsibilities) {
        this.company = company;
        this.location = location;
        this.position = position;
        this.dateRange = dateRange;
        this.responsibilities = responsibilities;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }
    
    public String getDateRange() { return dateRange; }
    public void setDateRange(String dateRange) { this.dateRange = dateRange; }
    
    public List<String> getResponsibilities() { return responsibilities; }
    public void setResponsibilities(List<String> responsibilities) { this.responsibilities = responsibilities; }
}

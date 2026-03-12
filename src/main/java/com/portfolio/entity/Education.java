package com.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "education")
public class Education {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String institution;
    
    private String course;
    private String dateRange;
    private String level;
    
    // Constructors
    public Education() {}
    
    public Education(String institution, String course, String dateRange, String level) {
        this.institution = institution;
        this.course = course;
        this.dateRange = dateRange;
        this.level = level;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }
    
    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
    
    public String getDateRange() { return dateRange; }
    public void setDateRange(String dateRange) { this.dateRange = dateRange; }
    
    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}

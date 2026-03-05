package com.portfolio.controller;

import com.portfolio.model.PortfolioData;
import com.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allow React dev server
public class PortfolioController {
    
    @Autowired
    private PortfolioService portfolioService;
    
    // GET endpoints
    @GetMapping("/portfolio")
    public PortfolioData getPortfolioData() {
        return portfolioService.getPortfolioData();
    }
    
    @GetMapping("/person")
    public PortfolioData.Person getPersonalInformation() {
        return portfolioService.getPersonalInformation();
    }
    
    @GetMapping("/work-experience")
    public List<PortfolioData.WorkExperience> getWorkExperience() {
        return portfolioService.getWorkExperience();
    }
    
    @GetMapping("/education")
    public List<PortfolioData.Education> getEducation() {
        return portfolioService.getEducation();
    }
    
    @GetMapping("/skills")
    public List<String> getSkills() {
        return portfolioService.getSkills();
    }
    
    @GetMapping("/projects")
    public List<String> getProjects() {
        return portfolioService.getProjects();
    }
    
    // POST endpoints - for testing with JSON body
    @PostMapping("/person")
    public PortfolioData.Person updatePersonalInformation(@RequestBody PortfolioData.Person person) {
        return person; // Echo back the received data
    }
    
    @PostMapping("/work-experience")
    public PortfolioData.WorkExperience addWorkExperience(@RequestBody PortfolioData.WorkExperience workExperience) {
        return workExperience; // Echo back the received data
    }
    
    @PostMapping("/education")
    public PortfolioData.Education addEducation(@RequestBody PortfolioData.Education education) {
        return education; // Echo back the received data
    }
    
    @PostMapping("/skills")
    public List<String> updateSkills(@RequestBody List<String> skills) {
        return skills; // Echo back the received data
    }
    
    @PostMapping("/projects")
    public List<String> updateProjects(@RequestBody List<String> projects) {
        return projects; // Echo back the received data
    }
    
    @GetMapping("/health")
    public String health() {
        return "Portfolio API is running!";
    }
}

package com.portfolio.model;

import java.util.List;

public class PortfolioData {
    private Person person;
    private List<WorkExperience> workHistory;
    private List<Education> education;
    private List<String> skills;
    private List<String> freelanceProjects;
    
    // Constructors
    public PortfolioData() {}
    
    public PortfolioData(Person person, List<WorkExperience> workHistory, 
                        List<Education> education, List<String> skills, 
                        List<String> freelanceProjects) {
        this.person = person;
        this.workHistory = workHistory;
        this.education = education;
        this.skills = skills;
        this.freelanceProjects = freelanceProjects;
    }
    
    // Getters and Setters
    public Person getPerson() { return person; }
    public void setPerson(Person person) { this.person = person; }
    
    public List<WorkExperience> getWorkHistory() { return workHistory; }
    public void setWorkHistory(List<WorkExperience> workHistory) { this.workHistory = workHistory; }
    
    public List<Education> getEducation() { return education; }
    public void setEducation(List<Education> education) { this.education = education; }
    
    public List<String> getSkills() { return skills; }
    public void setSkills(List<String> skills) { this.skills = skills; }
    
    public List<String> getFreelanceProjects() { return freelanceProjects; }
    public void setFreelanceProjects(List<String> freelanceProjects) { this.freelanceProjects = freelanceProjects; }
    
    // Inner classes as public static for external access
    
    public static class Person {
        private String name;
        private String email;
        private String phone;
        private String address;
        private String birthDate;
        private String objective;
        
        public Person() {}
        
        public Person(String name, String email, String phone, String address, String birthDate, String objective) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.birthDate = birthDate;
            this.objective = objective;
        }
        
        // Getters and Setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        
        public String getAddress() { return address; }
        public void setAddress(String address) { this.address = address; }
        
        public String getBirthDate() { return birthDate; }
        public void setBirthDate(String birthDate) { this.birthDate = birthDate; }
        
        public String getObjective() { return objective; }
        public void setObjective(String objective) { this.objective = objective; }
    }
    
    public static class WorkExperience {
        private String company;
        private String location;
        private String position;
        private String dateRange;
        private List<String> responsibilities;
        
        public WorkExperience() {}
        
        public WorkExperience(String company, String location, String position, String dateRange, List<String> responsibilities) {
            this.company = company;
            this.location = location;
            this.position = position;
            this.dateRange = dateRange;
            this.responsibilities = responsibilities;
        }
        
        // Getters and Setters
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
    
    public static class Education {
        private String institution;
        private String course;
        private String dateRange;
        private String level;
        
        public Education() {}
        
        public Education(String institution, String course, String dateRange, String level) {
            this.institution = institution;
            this.course = course;
            this.dateRange = dateRange;
            this.level = level;
        }
        
        // Getters and Setters
        public String getInstitution() { return institution; }
        public void setInstitution(String institution) { this.institution = institution; }
        
        public String getCourse() { return course; }
        public void setCourse(String course) { this.course = course; }
        
        public String getDateRange() { return dateRange; }
        public void setDateRange(String dateRange) { this.dateRange = dateRange; }
        
        public String getLevel() { return level; }
        public void setLevel(String level) { this.level = level; }
    }
}

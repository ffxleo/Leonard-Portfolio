package model;

import java.util.List;

public class WorkExperience {
    private String company;
    private String location;
    private String position;
    private String dateRange;
    private List<String> responsibilities;

    public WorkExperience(String company, String location, String position, String dateRange, List<String> responsibilities) {
        this.company = company;
        this.location = location;
        this.position = position;
        this.dateRange = dateRange;
        this.responsibilities = responsibilities;
    }

    public String getCompany() { return company; }
    public String getLocation() { return location; }
    public String getPosition() { return position; }
    public String getDateRange() { return dateRange; }
    public List<String> getResponsibilities() { return responsibilities; }
}

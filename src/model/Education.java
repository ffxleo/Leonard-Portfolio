package model;

public class Education {
    private String institution;
    private String course;
    private String dateRange;
    private String level;

    public Education(String institution, String course, String dateRange, String level) {
        this.institution = institution;
        this.course = course;
        this.dateRange = dateRange;
        this.level = level;
    }

    public String getInstitution() { return institution; }
    public String getCourse() { return course; }
    public String getDateRange() { return dateRange; }
    public String getLevel() { return level; }
}

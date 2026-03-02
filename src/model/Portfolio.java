package model;

import java.util.List;

public class Portfolio {
    private Person person;
    private List<WorkExperience> workHistory;
    private List<Education> education;
    private List<String> skills;
    private List<String> freelanceProjects;

    public Portfolio(Person person, List<WorkExperience> workHistory, List<Education> education, 
                     List<String> skills, List<String> freelanceProjects) {
        this.person = person;
        this.workHistory = workHistory;
        this.education = education;
        this.skills = skills;
        this.freelanceProjects = freelanceProjects;
    }

    public Person getPerson() { return person; }
    public List<WorkExperience> getWorkHistory() { return workHistory; }
    public List<Education> getEducation() { return education; }
    public List<String> getSkills() { return skills; }
    public List<String> getFreelanceProjects() { return freelanceProjects; }
}

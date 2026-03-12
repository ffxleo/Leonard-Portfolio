package com.portfolio.service;

import com.portfolio.entity.*;
import com.portfolio.model.PortfolioData;
import com.portfolio.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioService {
    
    private final PersonRepository personRepository;
    private final WorkExperienceRepository workExperienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ProjectRepository projectRepository;
    
    public PortfolioService(PersonRepository personRepository,
                           WorkExperienceRepository workExperienceRepository,
                           EducationRepository educationRepository,
                           SkillRepository skillRepository,
                           ProjectRepository projectRepository) {
        this.personRepository = personRepository;
        this.workExperienceRepository = workExperienceRepository;
        this.educationRepository = educationRepository;
        this.skillRepository = skillRepository;
        this.projectRepository = projectRepository;
    }
    
    public PortfolioData.Person getPersonalInformation() {
        Person person = personRepository.findAll().stream().findFirst()
            .orElseThrow(() -> new RuntimeException("Person data not found"));
        
        return new PortfolioData.Person(
            person.getName(),
            person.getEmail(),
            person.getPhone(),
            person.getAddress(),
            person.getBirthDate(),
            person.getObjective()
        );
    }
    
    public List<PortfolioData.WorkExperience> getWorkExperience() {
        return workExperienceRepository.findAll().stream()
            .map(work -> new PortfolioData.WorkExperience(
                work.getCompany(),
                work.getLocation(),
                work.getPosition(),
                work.getDateRange(),
                work.getResponsibilities()
            ))
            .collect(Collectors.toList());
    }
    
    public List<PortfolioData.Education> getEducation() {
        return educationRepository.findAll().stream()
            .map(edu -> new PortfolioData.Education(
                edu.getInstitution(),
                edu.getCourse(),
                edu.getDateRange(),
                edu.getLevel()
            ))
            .collect(Collectors.toList());
    }
    
    public List<String> getSkills() {
        return skillRepository.findAll().stream()
            .map(Skill::getSkillName)
            .collect(Collectors.toList());
    }
    
    public List<String> getProjects() {
        return projectRepository.findAll().stream()
            .map(Project::getProjectName)
            .collect(Collectors.toList());
    }
    
    public PortfolioData getPortfolioData() {
        PortfolioData data = new PortfolioData();
        data.setPerson(getPersonalInformation());
        data.setWorkHistory(getWorkExperience());
        data.setEducation(getEducation());
        data.setSkills(getSkills());
        data.setFreelanceProjects(getProjects());
        return data;
    }
}

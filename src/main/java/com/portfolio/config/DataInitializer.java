package com.portfolio.config;

import com.portfolio.entity.*;
import com.portfolio.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {
    
    private final PersonRepository personRepository;
    private final WorkExperienceRepository workExperienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ProjectRepository projectRepository;
    
    public DataInitializer(PersonRepository personRepository,
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
    
    @Override
    public void run(String... args) throws Exception {
        // Initialize Person
        Person person = new Person(
            "Leonard O. Lalican",
            "leonardorsolinolalican@gmail.com",
            "09655791871",
            "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
            "December 28, 1991",
            "To be involved in work where I can give my abilities, to give my service and enhance my skills to meet company goals and objective with full of integrity and honesty."
        );
        personRepository.save(person);
        
        // Initialize Work Experience
        WorkExperience work1 = new WorkExperience(
            "Networld Capital Ventures, Inc. (PJ Lhuillier Group)",
            "156 Jupiter, Makati, Metro Manila",
            "Software Engineer",
            "July 2024 – Present",
            Arrays.asList(
                "Insurely Mobile Application Android and IOS (.Net WCF C# Rest APIs .Netcore, MSSQL, QT Framework, C++, Python, Java)",
                "Managing Google Playstore and Apple Appstore Application Version Updates",
                "Managing/Developing External and Internal API'.s"

            )
        );
        
        WorkExperience work2 = new WorkExperience(
            "Collabera Digital Philippines (Ascendion)",
            "6784, Rufino Pacific Tower, Makati",
            ".NET Developer",
            "March 2023 – July 2024",
            Arrays.asList(
                "Insurely Mobile Application - OTP authentication, account management, dashboard, email notification (.Net WCF C# Rest APIs, MSSQL, QT Framework, C++, Python)",
                "Managing/Developing Internal API's"
            )
        );
        
        WorkExperience work3 = new WorkExperience(
            "EMS Components Assembly INC.",
            "117 Technology Avenue, Laguna Technopark, Biñan, Laguna",
            "Software Developer / I.T Consultant",
            "January 2021 – March 2023",
            Arrays.asList(
                "Training Management System with certification (ASP.Net MVC C#, MySQL)",
                "HR Hiring System and Training Management (ASP.Net MVC C#, MySQL)",
                "NFC Timekeeping System (ASP.Net XAML, C#, MySQL)",
                "Covid19 Monitoring System (ASP.Net XAML, C#, MySQL)",
                "Spare parts Management System (ASP.Net MVC C#, MySQL)",
                "Compliance Document Requirements Monitoring (Java, Apache Tomcat, MySQL)"
            )
        );
        
        workExperienceRepository.saveAll(Arrays.asList(work1, work2, work3));
        
        // Initialize Education
        Education edu1 = new Education(
            "Laguna State Polytechnic University",
            "Bachelor of Science in Information Technology",
            "Aug. 2016 – August 2020",
            "College"
        );
        
        Education edu2 = new Education(
            "Imus Computer College, GMA Cavite",
            "2 Years Information Technology",
            "Oct. 2011 - March 2013",
            "College"
        );
        
        Education edu3 = new Education(
            "Plaridel National High School",
            "Secondary Education",
            "June 2001 – March 2005",
            "Secondary"
        );
        
        educationRepository.saveAll(Arrays.asList(edu1, edu2, edu3));
        
        // Initialize Skills
        String[] skills = {
            "ASP.Net MVC C#, VB.net, XAML, WPF, Winforms",
            ".Net Core, Rest APIs, WCF, Entity Framework",
            "Java, Java Springboot, C++, Python",
            "ReactJS, JavaScript, PHP, CSS3, HTML5",
            "MySQL, MSSQL, Stored Procedures",
            "Android Studio, QT Framework",
            "Bitbucket, Github, CI/CD, Docker",
            "Adobe Photoshop, Illustrator, After Effects, Canva",
            "Microsoft Office Suite",
            "PC Troubleshooting, Networking"
        };
        
        for (String skillName : skills) {
            skillRepository.save(new Skill(skillName));
        }
        
        // Initialize Projects
        String[] projects = {
            "Vidar and Marti-lian Pharmacy Inventory and POS (.Net C#, PHP Javascript, MySql)",
            "Freddie And Lenie Grocery Store Inventory POS (.Net C#, PHP, Javascript, MySql)",
            "Ralphs Joy Restaurant POS System (VB.net, Winforms, MySql)",
            "Boyong and Julieann Mini Groceries (.Net C#, PHP, Javascript, MySql)",
            "Neri Ann's Whole Sale Grocery POS System (.Net C#, PHP, Javascript, MySql)"
        };
        
        for (String projectName : projects) {
            projectRepository.save(new Project(projectName));
        }
        
        System.out.println("✅ Database initialized with portfolio data");
    }
}

package com.portfolio.service;

import com.portfolio.model.PortfolioData;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
public class PortfolioService {
    
    public PortfolioData.Person getPersonalInformation() {
        return new PortfolioData.Person(
            "Leonard O. Lalican",
            "leonardorsolinolalican@gmail.com",
            "09655791871",
            "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
            "December 28, 1991",
            "To be involved in work where I can give my abilities, to give my service and enhance my skills to meet company goals and objective with full of integrity and honesty."
        );
    }
    
    public List<PortfolioData.WorkExperience> getWorkExperience() {
        return Arrays.asList(
            new PortfolioData.WorkExperience(
                "Networld Capital Ventures, Inc. (PJ Lhuillier Group)",
                "156 Jupiter, Makati, Metro Manila",
                "Software Engineer",
                "July 2024 – Present",
                Arrays.asList(
                    "Insurely Mobile Application Android and IOS (.Net WCF C# Rest APIs .Netcore, MSSQL, QT Framework, C++, Python, Java)",
                    "Managing Google Playstore and Apple Appstore Application Version Updates"
                )
            ),
            new PortfolioData.WorkExperience(
                "Collabera Digital Philippines (Ascendion)",
                "6784, Rufino Pacific Tower, Makati",
                ".NET Developer",
                "March 2023 – July 2024",
                Arrays.asList(
                    "Insurely Mobile Application - OTP authentication, account management, dashboard, email notification (.Net WCF C# Rest APIs, MSSQL, QT Framework, C++, Python)"
                )
            ),
            new PortfolioData.WorkExperience(
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
            )
        );
    }
    
    public List<PortfolioData.Education> getEducation() {
        return Arrays.asList(
            new PortfolioData.Education(
                "Laguna State Polytechnic University",
                "Bachelor of Science in Information Technology",
                "Aug. 2016 – August 2020",
                "College"
            ),
            new PortfolioData.Education(
                "Imus Computer College, GMA Cavite",
                "2 Years Information Technology",
                "Oct. 2011 - March 2013",
                "College"
            ),
            new PortfolioData.Education(
                "Plaridel National High School",
                "Secondary Education",
                "June 2001 – March 2005",
                "Secondary"
            )
        );
    }
    
    public List<String> getSkills() {
        return Arrays.asList(
            "ASP.Net MVC C#, VB.net, XAML, WPF",
            ".Net Core, Rest APIs, WCF",
            "Java, C++, Python",
            "JavaScript, PHP, CSS, HTML",
            "MySQL, MSSQL, Stored Procedures",
            "Android Studio, QT Framework",
            "Github CI/CD",
            "Adobe Photoshop, Illustrator, After Effects",
            "Microsoft Office Suite",
            "PC Troubleshooting, Networking"
        );
    }
    
    public List<String> getProjects() {
        return Arrays.asList(
            "Vidar and Marti-lian Pharmacy Inventory and POS (C#)",
            "Freddie And Lenie Grocery Store Inventory POS (C# & PHP)",
            "Ralphs Joy Restaurant POS System (VB.net)",
            "JSU Trading POS System (VB.net)",
            "Neri Ann's Whole Sale Grocery POS System (C# & PHP)"
        );
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

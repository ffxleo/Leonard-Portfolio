package view;

import model.*;

public class HtmlGenerator {
    
    public String generatePortfolioHtml(Portfolio portfolio) {
        StringBuilder html = new StringBuilder();
        
        html.append("<!DOCTYPE html>\n");
        html.append("<html lang='en'>\n<head>\n");
        html.append("<meta charset='UTF-8'>\n");
        html.append("<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n");
        html.append("<title>").append(portfolio.getPerson().getName()).append(" - Portfolio</title>\n");
        html.append(getStyles());
        html.append("</head>\n<body>\n");
        
        html.append(generateHeader(portfolio.getPerson()));
        html.append("<div class='container'>\n");
        html.append(generateWorkExperience(portfolio.getWorkHistory()));
        html.append(generateEducation(portfolio.getEducation()));
        html.append(generateSkills(portfolio.getSkills()));
        html.append(generateFreelanceProjects(portfolio.getFreelanceProjects()));
        html.append("</div>\n");
        
        html.append("</body>\n</html>");
        
        return html.toString();
    }
    
    private String getStyles() {
        return "<style>\n" +
            "* { margin: 0; padding: 0; box-sizing: border-box; }\n" +
            "body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f4f4f4; }\n" +
            ".header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px; text-align: center; }\n" +
            ".name { font-size: 3rem; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }\n" +
            ".contact-info { margin: 20px 0; font-size: 1.1rem; }\n" +
            ".contact-info p { margin: 5px 0; }\n" +
            ".objective { margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 8px; }\n" +
            ".objective h3 { font-size: 1.5rem; margin-bottom: 10px; }\n" +
            ".container { max-width: 1200px; margin: 0 auto; padding: 20px; }\n" +
            ".section { background: white; margin: 20px 0; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\n" +
            ".section-title { font-size: 2rem; color: #2c3e50; margin-bottom: 20px; border-bottom: 3px solid #3498db; padding-bottom: 10px; }\n" +
            ".job { margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid #e0e0e0; }\n" +
            ".job:last-child { border-bottom: none; }\n" +
            ".company { color: #2c3e50; font-size: 1.5rem; margin-bottom: 5px; }\n" +
            ".position { font-size: 1.2rem; color: #3498db; font-weight: 600; margin: 5px 0; }\n" +
            ".date-range { color: #7f8c8d; font-weight: 600; }\n" +
            ".location { color: #7f8c8d; font-style: italic; margin-bottom: 15px; }\n" +
            ".responsibilities { padding-left: 20px; }\n" +
            ".responsibilities li { margin: 8px 0; }\n" +
            ".skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; }\n" +
            ".skill-item { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 20px; border-radius: 8px; text-align: center; font-weight: 500; }\n" +
            ".project-item { background: #f8f9fa; padding: 15px 20px; margin: 10px 0; border-left: 4px solid #3498db; border-radius: 4px; }\n" +
            ".education-item { margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid #e0e0e0; }\n" +
            ".institution { color: #2c3e50; font-size: 1.3rem; }\n" +
            ".course { font-size: 1.1rem; color: #3498db; font-weight: 600; margin: 5px 0; }\n" +
            "</style>\n";
    }
    
    private String generateHeader(Person person) {
        return "<header class='header'>\n" +
            "<h1 class='name'>" + person.getName() + "</h1>\n" +
            "<div class='contact-info'>\n" +
            "<p><strong>Email:</strong> " + person.getEmail() + "</p>\n" +
            "<p><strong>Phone:</strong> " + person.getPhone() + "</p>\n" +
            "<p><strong>Address:</strong> " + person.getAddress() + "</p>\n" +
            "</div>\n" +
            "<div class='objective'>\n" +
            "<h3>Objective</h3>\n" +
            "<p>" + person.getObjective() + "</p>\n" +
            "</div>\n" +
            "</header>\n";
    }
    
    private String generateWorkExperience(java.util.List<WorkExperience> workHistory) {
        StringBuilder html = new StringBuilder("<section class='section'>\n<h2 class='section-title'>Work Experience</h2>\n");
        
        for (WorkExperience job : workHistory) {
            html.append("<div class='job'>\n");
            html.append("<h3 class='company'>").append(job.getCompany()).append("</h3>\n");
            html.append("<p class='date-range'>").append(job.getDateRange()).append("</p>\n");
            html.append("<p class='position'>").append(job.getPosition()).append("</p>\n");
            html.append("<p class='location'>").append(job.getLocation()).append("</p>\n");
            html.append("<ul class='responsibilities'>\n");
            for (String resp : job.getResponsibilities()) {
                html.append("<li>").append(resp).append("</li>\n");
            }
            html.append("</ul>\n</div>\n");
        }
        
        html.append("</section>\n");
        return html.toString();
    }
    
    private String generateEducation(java.util.List<Education> education) {
        StringBuilder html = new StringBuilder("<section class='section'>\n<h2 class='section-title'>Education</h2>\n");
        
        for (Education edu : education) {
            html.append("<div class='education-item'>\n");
            html.append("<h3 class='institution'>").append(edu.getInstitution()).append("</h3>\n");
            html.append("<p class='date-range'>").append(edu.getDateRange()).append("</p>\n");
            html.append("<p class='course'>").append(edu.getCourse()).append("</p>\n");
            html.append("</div>\n");
        }
        
        html.append("</section>\n");
        return html.toString();
    }
    
    private String generateSkills(java.util.List<String> skills) {
        StringBuilder html = new StringBuilder("<section class='section'>\n<h2 class='section-title'>Technical Skills</h2>\n");
        html.append("<div class='skills-grid'>\n");
        
        for (String skill : skills) {
            html.append("<div class='skill-item'>").append(skill).append("</div>\n");
        }
        
        html.append("</div>\n</section>\n");
        return html.toString();
    }
    
    private String generateFreelanceProjects(java.util.List<String> projects) {
        StringBuilder html = new StringBuilder("<section class='section'>\n<h2 class='section-title'>Freelance Projects</h2>\n");
        
        for (String project : projects) {
            html.append("<div class='project-item'>").append(project).append("</div>\n");
        }
        
        html.append("</section>\n");
        return html.toString();
    }
}

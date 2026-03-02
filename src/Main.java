import model.Portfolio;
import service.PortfolioService;
import view.HtmlGenerator;

import java.awt.Desktop;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Leonard O. Lalican Portfolio Generator ===");
        System.out.println("Portfolio using OOP principles...\n");
        
        // Create portfolio using service layer
        PortfolioService portfolioService = new PortfolioService();
        Portfolio portfolio = portfolioService.createPortfolio();
        
        // Generate HTML using view layer
        HtmlGenerator htmlGenerator = new HtmlGenerator();
        String htmlContent = htmlGenerator.generatePortfolioHtml(portfolio);
        
        // Save to file
        try {
            File outputFile = new File("portfolio.html");
            FileWriter writer = new FileWriter(outputFile);
            writer.write(htmlContent);
            writer.close();
            
            System.out.println("✓ Portfolio generated successfully!");
            System.out.println("✓ File saved as: " + outputFile.getAbsolutePath());
            
            // Open in default browser
            if (Desktop.isDesktopSupported()) {
                Desktop.getDesktop().browse(outputFile.toURI());
                System.out.println("✓ Opening portfolio in your default browser...");
            }
            
        } catch (IOException e) {
            System.err.println("Error generating portfolio: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

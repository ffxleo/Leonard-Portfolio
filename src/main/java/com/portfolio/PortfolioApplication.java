package com.portfolio;

import com.portfolio.controller.LogsController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class PortfolioApplication {
    public static void main(String[] args) {
        LogsController.addLog("🔧 Starting Portfolio API...");
        SpringApplication.run(PortfolioApplication.class, args);
    }
    
    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        LogsController.addLog("✅ Portfolio API is ready to accept requests");
        LogsController.addLog("📍 Base URL: /api");
        LogsController.addLog("🔐 Authentication: JWT Token required");
    }
}

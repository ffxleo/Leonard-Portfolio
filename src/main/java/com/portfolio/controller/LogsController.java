package com.portfolio.controller;

import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ConcurrentLinkedQueue;

@RestController
@RequestMapping("/api/logs")
@CrossOrigin(origins = {"http://localhost:3000", "https://ffxleo.github.io"})
public class LogsController {
    
    private static final Queue<String> logBuffer = new ConcurrentLinkedQueue<>();
    private static final int MAX_LOGS = 100;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    
    static {
        // Add startup logs
        addLog("🚀 Server starting...");
        addLog("📦 Loading application context");
        addLog("☕ Java " + System.getProperty("java.version"));
        addLog("🌱 Spring Boot application initialized");
        addLog("🔐 Security configuration loaded");
        addLog("🌐 Server ready on port " + System.getenv().getOrDefault("PORT", "8080"));
        addLog("✅ Application started successfully");
    }
    
    public static void addLog(String message) {
        String timestamp = LocalDateTime.now().format(formatter);
        String logEntry = String.format("[%s] %s", timestamp, message);
        logBuffer.offer(logEntry);
        
        // Keep only last MAX_LOGS entries
        while (logBuffer.size() > MAX_LOGS) {
            logBuffer.poll();
        }
        
        // Also print to console
        System.out.println(logEntry);
    }
    
    @GetMapping
    public Map<String, Object> getLogs() {
        Map<String, Object> response = new HashMap<>();
        response.put("logs", new ArrayList<>(logBuffer));
        response.put("count", logBuffer.size());
        response.put("timestamp", LocalDateTime.now().toString());
        return response;
    }
    
    @GetMapping("/startup")
    public Map<String, Object> getStartupInfo() {
        Map<String, Object> info = new HashMap<>();
        
        // System information
        info.put("javaVersion", System.getProperty("java.version"));
        info.put("osName", System.getProperty("os.name"));
        info.put("osArch", System.getProperty("os.arch"));
        
        // Runtime information
        Runtime runtime = Runtime.getRuntime();
        info.put("availableProcessors", runtime.availableProcessors());
        info.put("totalMemory", runtime.totalMemory() / (1024 * 1024) + " MB");
        info.put("freeMemory", runtime.freeMemory() / (1024 * 1024) + " MB");
        info.put("maxMemory", runtime.maxMemory() / (1024 * 1024) + " MB");
        
        // Environment
        info.put("port", System.getenv().getOrDefault("PORT", "8080"));
        info.put("profile", System.getenv().getOrDefault("SPRING_PROFILES_ACTIVE", "default"));
        
        // Uptime
        long uptimeMs = java.lang.management.ManagementFactory.getRuntimeMXBean().getUptime();
        long uptimeSeconds = uptimeMs / 1000;
        long minutes = uptimeSeconds / 60;
        long seconds = uptimeSeconds % 60;
        info.put("uptime", String.format("%d min %d sec", minutes, seconds));
        
        return info;
    }
    
    @PostMapping("/clear")
    public Map<String, String> clearLogs() {
        logBuffer.clear();
        addLog("📝 Logs cleared");
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "Logs cleared successfully");
        return response;
    }
}

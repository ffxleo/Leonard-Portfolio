package com.portfolio.controller;

import com.portfolio.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    private final JwtUtil jwtUtil;
    
    // Store OTPs temporarily (in production, use Redis or database)
    private final Map<String, String> otpStore = new ConcurrentHashMap<>();
    
    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }
    
    @PostMapping("/send-otp")
    public Map<String, String> sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        
        if (email == null || email.isEmpty()) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Email is required");
            return errorResponse;
        }
        
        // Generate 6-digit OTP
        String otp = String.format("%06d", new Random().nextInt(999999));
        
        // Store OTP (in production, send via email service)
        otpStore.put(email, otp);
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "OTP sent successfully");
        response.put("email", email);
        // For demo purposes, return the OTP (in production, never do this!)
        response.put("otp", otp);
        response.put("note", "In production, OTP would be sent via email");
        
        return response;
    }
    
    @PostMapping("/verify-otp")
    public Map<String, String> verifyOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String otp = request.get("otp");
        
        if (email == null || otp == null) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Email and OTP are required");
            return errorResponse;
        }
        
        String storedOtp = otpStore.get(email);
        
        if (storedOtp != null && storedOtp.equals(otp)) {
            // OTP is valid, remove it and generate JWT token
            otpStore.remove(email);
            String token = jwtUtil.generateToken(email);
            
            Map<String, String> response = new HashMap<>();
            response.put("message", "OTP verified successfully");
            response.put("token", token);
            response.put("email", email);
            
            return response;
        }
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalid or expired OTP");
        return errorResponse;
    }
    
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        // Simple authentication (for demo purposes)
        // In production, validate against database
        if (("leonard".equals(username) && "portfolio123".equals(password)) ||
            ("admin".equals(username) && "admin123".equals(password))) {
            String token = jwtUtil.generateToken(username);
            
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "Login successful");
            response.put("username", username);
            
            return response;
        }
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalid credentials");
        errorResponse.put("message", "Username or password is incorrect");
        return errorResponse;
    }
    
    @GetMapping("/test")
    public Map<String, String> test() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Auth endpoint is working");
        return response;
    }
}

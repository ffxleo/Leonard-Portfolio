package com.portfolio.controller;

import com.portfolio.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    private final JwtUtil jwtUtil;
    
    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }
    
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        // Simple authentication (for demo purposes)
        // In production, validate against database
        if ("leonard".equals(username) && "portfolio123".equals(password)) {
            String token = jwtUtil.generateToken(username);
            
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "Login successful");
            response.put("username", username);
            
            return response;
        }
        
        throw new RuntimeException("Invalid credentials");
    }
    
    @GetMapping("/test")
    public Map<String, String> test() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Auth endpoint is working");
        return response;
    }
}

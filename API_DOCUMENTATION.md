# Portfolio API Documentation

Complete guide for the Java Spring Boot REST API backend.

## Quick Links
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [JSON Request Examples](#json-request-examples)

---

## Getting Started

### Prerequisites
- Java 17+
- Maven 3.6+
- IntelliJ IDEA (recommended)

### Running the Backend

**Option 1: IntelliJ IDEA**
1. Open project in IntelliJ
2. Navigate to `src/main/java/com/portfolio/PortfolioApplication.java`
3. Right-click → Run 'PortfolioApplication'

**Option 2: Command Line**
```bash
mvn spring-boot:run
```

**Option 3: Windows Batch File**
```bash
start-backend.bat
```

Backend runs on: `http://localhost:8080`

---

## Authentication

All endpoints (except login) require JWT authentication.

### Login to Get Token

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Copy the token** - you'll need it for all other requests!

---

## API Endpoints

### Summary Table

| Endpoint | Method | Auth Required | Body Required | Description |
|----------|--------|---------------|---------------|-------------|
| `/api/auth/login` | POST | ❌ | ✅ | Get JWT token |
| `/api/health` | GET | ✅ | ❌ | Health check |
| `/api/portfolio` | GET | ✅ | ❌ | Get all data |
| `/api/person` | GET | ✅ | ❌ | Get personal info |
| `/api/person` | POST | ✅ | ✅ | Update personal info |
| `/api/work-experience` | GET | ✅ | ❌ | Get work history |
| `/api/work-experience` | POST | ✅ | ✅ | Add work experience |
| `/api/education` | GET | ✅ | ❌ | Get education |
| `/api/education` | POST | ✅ | ✅ | Add education |
| `/api/skills` | GET | ✅ | ❌ | Get skills |
| `/api/skills` | POST | ✅ | ✅ | Update skills |
| `/api/projects` | GET | ✅ | ❌ | Get projects |
| `/api/projects` | POST | ✅ | ✅ | Update projects |

---

## Testing with Postman

### Step 1: Import Collection
1. Open Postman
2. Click "Import"
3. Select `Portfolio-API.postman_collection.json`
4. All endpoints will be ready to use

### Step 2: Login
1. Open "Login" request
2. Click "Send"
3. Copy the token from response

### Step 3: Use Token
For all other requests:
1. Click "Authorization" tab
2. Type: Select "Bearer Token"
3. Token: Paste your token
4. Click "Send"

---

## JSON Request Examples

All JSON samples are in the `json-samples/` folder.

### Login
```json
{
  "username": "admin",
  "password": "password123"
}
```

### Personal Information
```json
{
  "name": "Leonard O. Lalican",
  "email": "leonardorsolinolalican@gmail.com",
  "phone": "09655791871",
  "address": "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
  "birthDate": "December 28, 1991",
  "objective": "To be involved in work where I can give my abilities..."
}
```

### Work Experience
```json
{
  "company": "Tech Company Inc.",
  "location": "Makati, Metro Manila",
  "position": "Senior Software Engineer",
  "dateRange": "January 2026 – Present",
  "responsibilities": [
    "Lead development team",
    "Design microservices architecture",
    "Code review and mentoring"
  ]
}
```

### Education
```json
{
  "institution": "University Name",
  "course": "Degree Program",
  "dateRange": "2024 – 2026",
  "level": "Graduate"
}
```

### Skills (Array)
```json
[
  "Java, Spring Boot",
  "React, Node.js",
  "MySQL, MongoDB"
]
```

### Projects (Array)
```json
[
  "E-commerce Platform (Spring Boot + React)",
  "Mobile Banking App (Flutter)",
  "Hospital Management System (C#)"
]
```

---

## Quick Testing

### Browser Testing (GET endpoints only)
```
http://localhost:8080/api/health
http://localhost:8080/api/person
http://localhost:8080/api/work-experience
```

### cURL Examples

**Login:**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}'
```

**Get Person (with token):**
```bash
curl -X GET http://localhost:8080/api/person \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Troubleshooting

### Backend won't start
- Check Java version: `java -version` (need 17+)
- Check port 8080 is free
- Review IntelliJ console for errors

### 401 Unauthorized
- Token is missing or invalid
- Login again to get fresh token

### 404 Not Found
- Check URL spelling
- Verify backend is running

### Connection Refused
- Backend is not running
- Start backend first

---

## Project Structure

```
Leonard-Portfolio/
├── src/main/java/com/portfolio/
│   ├── PortfolioApplication.java      # Main Spring Boot class
│   ├── controller/
│   │   ├── AuthController.java        # Login endpoint
│   │   └── PortfolioController.java   # Portfolio endpoints
│   ├── model/
│   │   └── PortfolioData.java         # Data models
│   ├── security/
│   │   ├── JwtUtil.java               # JWT token utility
│   │   ├── JwtAuthenticationFilter.java
│   │   └── SecurityConfig.java        # Security configuration
│   └── service/
│       └── PortfolioService.java      # Business logic
├── src/main/resources/
│   └── application.properties         # Configuration
├── json-samples/                      # Sample JSON files
├── pom.xml                            # Maven dependencies
└── Portfolio-API.postman_collection.json
```

---

## Additional Resources

- **Backend Setup:** See `BACKEND_SETUP.md`
- **IntelliJ Setup:** See `INTELLIJ_SETUP.md`
- **Token Authentication:** See `TOKEN_AUTHENTICATION_GUIDE.md`
- **Raw JSON Requests:** See `RAW_JSON_REQUESTS.md`
- **Quick Reference:** See `QUICK_REFERENCE.md`

---

## Support

For issues or questions:
- Check the troubleshooting section above
- Review the detailed guides in the documentation folder
- Verify all prerequisites are installed

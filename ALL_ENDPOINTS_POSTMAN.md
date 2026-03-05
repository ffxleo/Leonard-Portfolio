# Complete Guide: How to Request All Endpoints in Postman

## Quick Reference Table

| # | Endpoint | Method | Body Required | URL |
|---|----------|--------|---------------|-----|
| 1 | Health Check | GET | No | `http://localhost:8080/api/health` |
| 2 | Get All Data | GET | No | `http://localhost:8080/api/portfolio` |
| 3 | Get Person | GET | No | `http://localhost:8080/api/person` |
| 4 | Get Work Experience | GET | No | `http://localhost:8080/api/work-experience` |
| 5 | Get Education | GET | No | `http://localhost:8080/api/education` |
| 6 | Get Skills | GET | No | `http://localhost:8080/api/skills` |
| 7 | Get Projects | GET | No | `http://localhost:8080/api/projects` |
| 8 | Update Person | POST | Yes | `http://localhost:8080/api/person` |
| 9 | Add Work Experience | POST | Yes | `http://localhost:8080/api/work-experience` |
| 10 | Add Education | POST | Yes | `http://localhost:8080/api/education` |
| 11 | Update Skills | POST | Yes | `http://localhost:8080/api/skills` |
| 12 | Update Projects | POST | Yes | `http://localhost:8080/api/projects` |

---

## GET Requests (No Body Needed)

### 1. Health Check
```
Method: GET
URL: http://localhost:8080/api/health
Headers: (none)
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL
3. Click Send

**Response:**
```
Portfolio API is running!
```

---

### 2. Get All Portfolio Data
```
Method: GET
URL: http://localhost:8080/api/portfolio
Headers: Accept: application/json
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL
3. Headers tab → Add `Accept: application/json`
4. Click Send

**Response:** Complete portfolio JSON

---

### 3. Get Personal Information
```
Method: GET
URL: http://localhost:8080/api/person
Headers: Accept: application/json
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL: `http://localhost:8080/api/person`
3. Headers → `Accept: application/json`
4. Click Send

**Response:**
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

---

### 4. Get Work Experience
```
Method: GET
URL: http://localhost:8080/api/work-experience
Headers: Accept: application/json
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL: `http://localhost:8080/api/work-experience`
3. Headers → `Accept: application/json`
4. Click Send

**Response:** Array of work experience objects

---

### 5. Get Education
```
Method: GET
URL: http://localhost:8080/api/education
Headers: Accept: application/json
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL: `http://localhost:8080/api/education`
3. Headers → `Accept: application/json`
4. Click Send

**Response:** Array of education objects

---

### 6. Get Skills
```
Method: GET
URL: http://localhost:8080/api/skills
Headers: Accept: application/json
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL: `http://localhost:8080/api/skills`
3. Headers → `Accept: application/json`
4. Click Send

**Response:** Array of skill strings

---

### 7. Get Projects
```
Method: GET
URL: http://localhost:8080/api/projects
Headers: Accept: application/json
Body: (none)
```

**Steps:**
1. New Request → GET
2. Enter URL: `http://localhost:8080/api/projects`
3. Headers → `Accept: application/json`
4. Click Send

**Response:** Array of project strings

---

## POST Requests (With JSON Body)

### 8. Update Personal Information
```
Method: POST
URL: http://localhost:8080/api/person
Headers: Content-Type: application/json
Body: JSON (see below)
```

**Steps:**
1. New Request → **POST**
2. Enter URL: `http://localhost:8080/api/person`
3. Headers tab → Add `Content-Type: application/json`
4. Body tab → Select **raw** → Select **JSON**
5. Paste JSON:

```json
{
  "name": "Leonard O. Lalican",
  "email": "leonardorsolinolalican@gmail.com",
  "phone": "09655791871",
  "address": "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
  "birthDate": "December 28, 1991",
  "objective": "To be involved in work where I can give my abilities, to give my service and enhance my skills to meet company goals and objective with full of integrity and honesty."
}
```

6. Click Send

---

### 9. Add Work Experience
```
Method: POST
URL: http://localhost:8080/api/work-experience
Headers: Content-Type: application/json
Body: JSON (see below)
```

**Steps:**
1. New Request → **POST**
2. Enter URL: `http://localhost:8080/api/work-experience`
3. Headers → `Content-Type: application/json`
4. Body → raw → JSON
5. Paste JSON:

```json
{
  "company": "Tech Company Inc.",
  "location": "Makati, Metro Manila",
  "position": "Senior Software Engineer",
  "dateRange": "January 2026 – Present",
  "responsibilities": [
    "Lead development team of 5 developers",
    "Design and implement microservices architecture",
    "Code review and mentoring junior developers"
  ]
}
```

6. Click Send

---

### 10. Add Education
```
Method: POST
URL: http://localhost:8080/api/education
Headers: Content-Type: application/json
Body: JSON (see below)
```

**Steps:**
1. New Request → **POST**
2. Enter URL: `http://localhost:8080/api/education`
3. Headers → `Content-Type: application/json`
4. Body → raw → JSON
5. Paste JSON:

```json
{
  "institution": "University of the Philippines",
  "course": "Master of Science in Computer Science",
  "dateRange": "2024 – 2026",
  "level": "Graduate"
}
```

6. Click Send

---

### 11. Update Skills
```
Method: POST
URL: http://localhost:8080/api/skills
Headers: Content-Type: application/json
Body: JSON Array (see below)
```

**Steps:**
1. New Request → **POST**
2. Enter URL: `http://localhost:8080/api/skills`
3. Headers → `Content-Type: application/json`
4. Body → raw → JSON
5. Paste JSON:

```json
[
  "Java, Spring Boot, Hibernate",
  "C#, .NET Core, ASP.NET MVC",
  "JavaScript, React, Node.js",
  "Python, Django, Flask",
  "MySQL, PostgreSQL, MongoDB",
  "Docker, Kubernetes, AWS",
  "Git, CI/CD, Jenkins",
  "REST APIs, Microservices",
  "Agile, Scrum, TDD"
]
```

6. Click Send

---

### 12. Update Projects
```
Method: POST
URL: http://localhost:8080/api/projects
Headers: Content-Type: application/json
Body: JSON Array (see below)
```

**Steps:**
1. New Request → **POST**
2. Enter URL: `http://localhost:8080/api/projects`
3. Headers → `Content-Type: application/json`
4. Body → raw → JSON
5. Paste JSON:

```json
[
  "E-commerce Platform with Payment Integration (Spring Boot + React)",
  "Mobile Banking Application (Flutter + Firebase)",
  "Hospital Management System (C# + SQL Server)",
  "Real-time Chat Application (Node.js + Socket.io)",
  "Inventory Management with Barcode Scanner (Java + MySQL)"
]
```

6. Click Send

---

## Visual Guide for Each Request Type

### GET Request Setup
```
┌─────────────────────────────────────────────────────────────┐
│  GET ▼  http://localhost:8080/api/person          Send      │
├─────────────────────────────────────────────────────────────┤
│  Params  Authorization  Headers  Body  Pre-request  Tests   │
├─────────────────────────────────────────────────────────────┤
│  Headers                                                     │
│  ┌──────────────┬──────────────────────┬──────────────────┐ │
│  │ KEY          │ VALUE                │ DESCRIPTION      │ │
│  ├──────────────┼──────────────────────┼──────────────────┤ │
│  │ Accept       │ application/json     │                  │ │
│  └──────────────┴──────────────────────┴──────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### POST Request Setup
```
┌─────────────────────────────────────────────────────────────┐
│  POST ▼  http://localhost:8080/api/person         Send      │
├─────────────────────────────────────────────────────────────┤
│  Params  Authorization  Headers  Body  Pre-request  Tests   │
├─────────────────────────────────────────────────────────────┤
│  Headers                                                     │
│  ┌──────────────────┬──────────────────────┬──────────────┐ │
│  │ KEY              │ VALUE                │ DESCRIPTION  │ │
│  ├──────────────────┼──────────────────────┼──────────────┤ │
│  │ Content-Type     │ application/json     │              │ │
│  └──────────────────┴──────────────────────┴──────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  Body                                                        │
│  ○ none  ○ form-data  ○ x-www-form-urlencoded               │
│  ● raw   ○ binary     ○ GraphQL                             │
│                                          Text ▼  JSON ▼      │
├─────────────────────────────────────────────────────────────┤
│  {                                                           │
│    "name": "Leonard O. Lalican",                            │
│    "email": "leonardorsolinolalican@gmail.com",            │
│    ...                                                       │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Testing Workflow

### Test All GET Endpoints First:
1. ✅ Health Check
2. ✅ Get Person
3. ✅ Get Work Experience
4. ✅ Get Education
5. ✅ Get Skills
6. ✅ Get Projects
7. ✅ Get All Portfolio Data

### Then Test POST Endpoints:
8. ✅ Update Person
9. ✅ Add Work Experience
10. ✅ Add Education
11. ✅ Update Skills
12. ✅ Update Projects

---

## Save All Requests in Collection

1. Create collection: "Portfolio API"
2. Create folders:
   - "GET Requests"
   - "POST Requests"
3. Save each request in appropriate folder
4. Export collection for backup

---

## Common Issues & Solutions

### Issue: "Could not get any response"
**Solution:** Backend not running. Start in IntelliJ.

### Issue: "404 Not Found"
**Solution:** Check URL spelling. Ensure correct endpoint.

### Issue: "400 Bad Request" (POST)
**Solution:** Invalid JSON. Check syntax at jsonlint.com

### Issue: "415 Unsupported Media Type" (POST)
**Solution:** Missing `Content-Type: application/json` header

### Issue: Empty response
**Solution:** Check backend console for errors

---

## Quick Copy-Paste URLs

```
http://localhost:8080/api/health
http://localhost:8080/api/portfolio
http://localhost:8080/api/person
http://localhost:8080/api/work-experience
http://localhost:8080/api/education
http://localhost:8080/api/skills
http://localhost:8080/api/projects
```

---

## Browser Testing (GET only)

You can test GET endpoints directly in browser:
- Open browser
- Paste URL
- Press Enter
- See JSON response

**Example:**
```
http://localhost:8080/api/person
```

---

## Summary

- **GET requests**: No body needed, just URL and Accept header
- **POST requests**: Need Content-Type header and JSON body
- **All endpoints**: Return JSON responses
- **Testing**: Start with GET, then try POST
- **Save work**: Export Postman collection

You now have 12 endpoints to demonstrate your REST API skills!

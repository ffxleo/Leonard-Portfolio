# POST Requests with JSON Body - Postman Guide

## How to Send JSON Data to API

---

## POST Request 1: Update Personal Information

### Postman Setup:
1. Create new request
2. Set method to **POST**
3. URL: `http://localhost:8080/api/person`
4. Click **"Headers"** tab
5. Add header:
   - Key: `Content-Type`
   - Value: `application/json`
6. Click **"Body"** tab
7. Select **"raw"**
8. Select **"JSON"** from dropdown (right side)
9. Paste this JSON:

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

10. Click **"Send"**
11. You should see the same JSON echoed back

---

## POST Request 2: Add Work Experience

### Postman Setup:
1. Method: **POST**
2. URL: `http://localhost:8080/api/work-experience`
3. Headers: `Content-Type: application/json`
4. Body → raw → JSON:

```json
{
  "company": "New Company Inc.",
  "location": "Makati, Metro Manila",
  "position": "Senior Developer",
  "dateRange": "January 2026 – Present",
  "responsibilities": [
    "Lead development team",
    "Code review and mentoring",
    "Architecture design"
  ]
}
```

5. Click **"Send"**

---

## POST Request 3: Add Education

### Postman Setup:
1. Method: **POST**
2. URL: `http://localhost:8080/api/education`
3. Headers: `Content-Type: application/json`
4. Body → raw → JSON:

```json
{
  "institution": "University of the Philippines",
  "course": "Master of Science in Computer Science",
  "dateRange": "2024 – 2026",
  "level": "Graduate"
}
```

5. Click **"Send"**

---

## POST Request 4: Update Skills

### Postman Setup:
1. Method: **POST**
2. URL: `http://localhost:8080/api/skills`
3. Headers: `Content-Type: application/json`
4. Body → raw → JSON:

```json
[
  "ASP.Net MVC C#, VB.net, XAML, WPF",
  ".Net Core, Rest APIs, WCF",
  "Java, C++, Python",
  "JavaScript, PHP, CSS, HTML",
  "MySQL, MSSQL, Stored Procedures",
  "Android Studio, QT Framework",
  "Github CI/CD",
  "Docker, Kubernetes",
  "AWS, Azure",
  "React, Angular, Vue.js"
]
```

5. Click **"Send"**

---

## POST Request 5: Update Projects

### Postman Setup:
1. Method: **POST**
2. URL: `http://localhost:8080/api/projects`
3. Headers: `Content-Type: application/json`
4. Body → raw → JSON:

```json
[
  "E-commerce Platform (React + Spring Boot)",
  "Mobile Banking App (Flutter)",
  "Inventory Management System (C#)",
  "Real-time Chat Application (Node.js)",
  "AI-powered Recommendation Engine (Python)"
]
```

5. Click **"Send"**

---

## Visual Guide - Postman Interface

```
┌─────────────────────────────────────────────────────────────┐
│  POST ▼  http://localhost:8080/api/person         Send      │
├─────────────────────────────────────────────────────────────┤
│  Params  Authorization  Headers  Body  Pre-request  Tests   │
├─────────────────────────────────────────────────────────────┤
│  Headers (1)                                                 │
│  ┌──────────────────┬──────────────────────┬──────────────┐ │
│  │ KEY              │ VALUE                │ DESCRIPTION  │ │
│  ├──────────────────┼──────────────────────┼──────────────┤ │
│  │ Content-Type     │ application/json     │              │ │
│  └──────────────────┴──────────────────────┴──────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Body                                                        │
├─────────────────────────────────────────────────────────────┤
│  ○ none  ○ form-data  ○ x-www-form-urlencoded               │
│  ● raw   ○ binary     ○ GraphQL                             │
│                                          Text ▼  JSON ▼      │
├─────────────────────────────────────────────────────────────┤
│  {                                                           │
│    "name": "Leonard O. Lalican",                            │
│    "email": "leonardorsolinolalican@gmail.com",            │
│    "phone": "09655791871",                                  │
│    "address": "9003 Reposa Subdivision...",                 │
│    "birthDate": "December 28, 1991",                        │
│    "objective": "To be involved in work..."                 │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step for Beginners

### Step 1: Create New Request
- Click **"New"** button
- Select **"HTTP Request"**

### Step 2: Set Method to POST
- Click the dropdown that says "GET"
- Select **"POST"**

### Step 3: Enter URL
- Type: `http://localhost:8080/api/person`

### Step 4: Add Headers
- Click **"Headers"** tab
- Click in the "Key" field
- Type: `Content-Type`
- Click in the "Value" field
- Type: `application/json`

### Step 5: Add JSON Body
- Click **"Body"** tab
- Select **"raw"** radio button
- Click dropdown on right (says "Text")
- Select **"JSON"**
- Paste your JSON in the text area

### Step 6: Send Request
- Click blue **"Send"** button
- See response below

---

## All POST Endpoints

| Endpoint | Method | Body Type |
|----------|--------|-----------|
| `/api/person` | POST | Person object |
| `/api/work-experience` | POST | WorkExperience object |
| `/api/education` | POST | Education object |
| `/api/skills` | POST | Array of strings |
| `/api/projects` | POST | Array of strings |

---

## Sample JSON Bodies

### Person Object
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "address": "string",
  "birthDate": "string",
  "objective": "string"
}
```

### Work Experience Object
```json
{
  "company": "string",
  "location": "string",
  "position": "string",
  "dateRange": "string",
  "responsibilities": ["string", "string"]
}
```

### Education Object
```json
{
  "institution": "string",
  "course": "string",
  "dateRange": "string",
  "level": "string"
}
```

### Skills Array
```json
["skill1", "skill2", "skill3"]
```

### Projects Array
```json
["project1", "project2", "project3"]
```

---

## cURL Examples (Command Line)

### POST Person
```bash
curl -X POST http://localhost:8080/api/person \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Leonard O. Lalican",
    "email": "leonardorsolinolalican@gmail.com",
    "phone": "09655791871",
    "address": "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
    "birthDate": "December 28, 1991",
    "objective": "To be involved in work where I can give my abilities..."
  }'
```

### POST Work Experience
```bash
curl -X POST http://localhost:8080/api/work-experience \
  -H "Content-Type: application/json" \
  -d '{
    "company": "New Company Inc.",
    "location": "Makati, Metro Manila",
    "position": "Senior Developer",
    "dateRange": "January 2026 – Present",
    "responsibilities": ["Lead development", "Code review"]
  }'
```

### POST Skills
```bash
curl -X POST http://localhost:8080/api/skills \
  -H "Content-Type: application/json" \
  -d '["Java", "Spring Boot", "React", "MySQL"]'
```

---

## JavaScript Fetch Examples

### POST Person
```javascript
fetch('http://localhost:8080/api/person', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Leonard O. Lalican",
    email: "leonardorsolinolalican@gmail.com",
    phone: "09655791871",
    address: "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
    birthDate: "December 28, 1991",
    objective: "To be involved in work where I can give my abilities..."
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### POST Skills
```javascript
fetch('http://localhost:8080/api/skills', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    "Java",
    "Spring Boot",
    "React",
    "MySQL"
  ])
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## Common Errors

### 400 Bad Request
- JSON syntax error
- Check for missing commas, quotes, or brackets
- Use a JSON validator: https://jsonlint.com/

### 415 Unsupported Media Type
- Missing `Content-Type: application/json` header
- Add it in Headers tab

### 404 Not Found
- Wrong URL
- Check endpoint spelling

### Empty Response
- Backend not running
- Start backend in IntelliJ

---

## Testing Checklist

- [ ] Backend is running
- [ ] Method is set to POST
- [ ] URL is correct
- [ ] Header `Content-Type: application/json` is added
- [ ] Body tab is selected
- [ ] "raw" is selected
- [ ] "JSON" is selected from dropdown
- [ ] Valid JSON is pasted in body
- [ ] Click Send
- [ ] Response status is 200 OK
- [ ] Response body shows echoed data

---

## Tips

1. **Validate JSON**: Use https://jsonlint.com/ to check JSON syntax
2. **Save Requests**: Save POST requests in your collection
3. **Use Variables**: Create environment variables for base URL
4. **Pretty Print**: Click "Pretty" tab to format response
5. **Copy as cURL**: Right-click request → "Code" → "cURL" to get command

---

## What These Endpoints Do

Currently, these POST endpoints **echo back** the data you send. This is perfect for:
- Testing JSON serialization/deserialization
- Validating request format
- Demonstrating REST API skills
- Learning how POST requests work

In a real application, these would:
- Save data to a database
- Update existing records
- Return success/error messages
- Validate input data

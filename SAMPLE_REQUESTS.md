# Sample API Requests

## Import Postman Collection

1. Open Postman
2. Click "Import" button
3. Select `Portfolio-API.postman_collection.json`
4. The collection will be imported with 2 requests ready to use

## Manual Request Setup

### Request 1: Health Check

**Postman Setup:**
```
Method: GET
URL: http://localhost:8080/api/health
Headers: (none required)
Body: (none)
```

**Expected Response:**
```
Status: 200 OK
Body: Portfolio API is running!
```

**Screenshot of Postman:**
```
┌─────────────────────────────────────────────┐
│ GET  http://localhost:8080/api/health       │
├─────────────────────────────────────────────┤
│ Headers  Body  Pre-request  Tests           │
├─────────────────────────────────────────────┤
│                                             │
│ (empty - no headers needed)                 │
│                                             │
└─────────────────────────────────────────────┘

Response:
Portfolio API is running!
```

---

### Request 2: Get Portfolio Data

**Postman Setup:**
```
Method: GET
URL: http://localhost:8080/api/portfolio
Headers:
  - Key: Accept
  - Value: application/json
Body: (none)
```

**Expected Response:**
```json
Status: 200 OK
Content-Type: application/json

{
  "person": {
    "name": "Leonard O. Lalican",
    "email": "leonardorsolinolalican@gmail.com",
    "phone": "09655791871",
    "address": "9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna",
    "birthDate": "December 28, 1991",
    "objective": "To be involved in work where I can give my abilities, to give my service and enhance my skills to meet company goals and objective with full of integrity and honesty."
  },
  "workHistory": [
    {
      "company": "Networld Capital Ventures, Inc. (PJ Lhuillier Group)",
      "location": "156 Jupiter, Makati, Metro Manila",
      "position": "Software Engineer",
      "dateRange": "July 2024 – Present",
      "responsibilities": [
        "Insurely Mobile Application Android and IOS (.Net WCF C# Rest APIs .Netcore, MSSQL, QT Framework, C++, Python, Java)",
        "Managing Google Playstore and Apple Appstore Application Version Updates"
      ]
    },
    {
      "company": "Collabera Digital Philippines (Ascendion)",
      "location": "6784, Rufino Pacific Tower, Makati",
      "position": ".NET Developer",
      "dateRange": "March 2023 – July 2024",
      "responsibilities": [
        "Insurely Mobile Application - OTP authentication, account management, dashboard, email notification (.Net WCF C# Rest APIs, MSSQL, QT Framework, C++, Python)"
      ]
    },
    {
      "company": "EMS Components Assembly INC.",
      "location": "117 Technology Avenue, Laguna Technopark, Biñan, Laguna",
      "position": "Software Developer / I.T Consultant",
      "dateRange": "January 2021 – March 2023",
      "responsibilities": [
        "Training Management System with certification (ASP.Net MVC C#, MySQL)",
        "HR Hiring System and Training Management (ASP.Net MVC C#, MySQL)",
        "NFC Timekeeping System (ASP.Net XAML, C#, MySQL)",
        "Covid19 Monitoring System (ASP.Net XAML, C#, MySQL)",
        "Spare parts Management System (ASP.Net MVC C#, MySQL)",
        "Compliance Document Requirements Monitoring (Java, Apache Tomcat, MySQL)"
      ]
    }
  ],
  "education": [
    {
      "institution": "Laguna State Polytechnic University",
      "course": "Bachelor of Science in Information Technology",
      "dateRange": "Aug. 2016 – August 2020",
      "level": "College"
    },
    {
      "institution": "Imus Computer College, GMA Cavite",
      "course": "2 Years Information Technology",
      "dateRange": "Oct. 2011 - March 2013",
      "level": "College"
    },
    {
      "institution": "Plaridel National High School",
      "course": "Secondary Education",
      "dateRange": "June 2001 – March 2005",
      "level": "Secondary"
    }
  ],
  "skills": [
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
  ],
  "freelanceProjects": [
    "Vidar and Marti-lian Pharmacy Inventory and POS (C#)",
    "Freddie And Lenie Grocery Store Inventory POS (C# & PHP)",
    "Ralphs Joy Restaurant POS System (VB.net)",
    "JSU Trading POS System (VB.net)",
    "Neri Ann's Whole Sale Grocery POS System (C# & PHP)"
  ]
}
```

---

## Browser Testing (Easiest Method)

Just paste these URLs in your browser:

1. **Health Check:**
   ```
   http://localhost:8080/api/health
   ```

2. **Portfolio Data:**
   ```
   http://localhost:8080/api/portfolio
   ```

---

## cURL Commands (Command Line)

### Windows Command Prompt:
```bash
# Health Check
curl http://localhost:8080/api/health

# Portfolio Data
curl http://localhost:8080/api/portfolio
```

### PowerShell:
```powershell
# Health Check
Invoke-WebRequest -Uri http://localhost:8080/api/health

# Portfolio Data (formatted)
Invoke-RestMethod -Uri http://localhost:8080/api/portfolio | ConvertTo-Json -Depth 10
```

---

## JavaScript Fetch (For Testing in Browser Console)

Open browser console (F12) and paste:

```javascript
// Health Check
fetch('http://localhost:8080/api/health')
  .then(response => response.text())
  .then(data => console.log(data));

// Portfolio Data
fetch('http://localhost:8080/api/portfolio')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Response Status Codes

| Status Code | Meaning | When It Happens |
|-------------|---------|-----------------|
| 200 OK | Success | API is working correctly |
| 404 Not Found | Endpoint not found | Wrong URL or backend not running |
| 500 Internal Server Error | Server error | Check backend console for errors |
| Connection Refused | Can't connect | Backend is not running |

---

## Troubleshooting

### "Connection Refused" or "Cannot connect"
- Backend is not running
- Start the backend in IntelliJ

### "404 Not Found"
- Check the URL is correct
- Verify backend is running on port 8080

### Empty or Error Response
- Check IntelliJ console for error messages
- Verify Spring Boot started successfully

---

## Quick Test Checklist

- [ ] Backend is running in IntelliJ
- [ ] Console shows "Started PortfolioApplication"
- [ ] Open browser to http://localhost:8080/api/health
- [ ] See "Portfolio API is running!"
- [ ] Open http://localhost:8080/api/portfolio
- [ ] See JSON data with your portfolio information
- [ ] Test in Postman (optional)

---

## Next Steps After Testing

Once the API is working:

1. ✅ Backend demonstrates your Java/Spring Boot skills
2. ✅ Can be shown in interviews or demos
3. ✅ React frontend stays static on GitHub Pages
4. ✅ Both showcase your full-stack capability

The backend doesn't need to be deployed - it's perfect for local demonstrations!

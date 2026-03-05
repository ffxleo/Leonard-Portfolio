# API Request & Response Examples

## Endpoint 1: Health Check

### Request
```http
GET http://localhost:8080/api/health
```

### Response
```
Status: 200 OK
Content-Type: text/plain

Portfolio API is running!
```

---

## Endpoint 2: Get Portfolio Data

### Request
```http
GET http://localhost:8080/api/portfolio
Accept: application/json
```

### Response
```json
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

## Postman Setup

### Request 1: Health Check
```
Method: GET
URL: http://localhost:8080/api/health
Headers: (none)
Body: (none)
```

### Request 2: Portfolio Data
```
Method: GET
URL: http://localhost:8080/api/portfolio
Headers:
  Accept: application/json
Body: (none)
```

---

## cURL Examples

### Windows CMD
```bash
# Health Check
curl http://localhost:8080/api/health

# Portfolio Data (save to file)
curl http://localhost:8080/api/portfolio > portfolio-data.json

# Portfolio Data (pretty print with jq if installed)
curl http://localhost:8080/api/portfolio | jq
```

### PowerShell
```powershell
# Health Check
Invoke-WebRequest -Uri "http://localhost:8080/api/health"

# Portfolio Data
$response = Invoke-RestMethod -Uri "http://localhost:8080/api/portfolio"
$response | ConvertTo-Json -Depth 10

# Save to file
Invoke-RestMethod -Uri "http://localhost:8080/api/portfolio" | ConvertTo-Json -Depth 10 | Out-File portfolio-data.json
```

---

## JavaScript Fetch Example

```javascript
// Health Check
fetch('http://localhost:8080/api/health')
  .then(response => response.text())
  .then(data => {
    console.log('Health Check:', data);
  })
  .catch(error => console.error('Error:', error));

// Portfolio Data
fetch('http://localhost:8080/api/portfolio')
  .then(response => response.json())
  .then(data => {
    console.log('Portfolio Data:', data);
    console.log('Name:', data.person.name);
    console.log('Email:', data.person.email);
    console.log('Skills:', data.skills);
  })
  .catch(error => console.error('Error:', error));
```

---

## Python Example

```python
import requests
import json

# Health Check
response = requests.get('http://localhost:8080/api/health')
print('Health Check:', response.text)

# Portfolio Data
response = requests.get('http://localhost:8080/api/portfolio')
portfolio = response.json()

print('Name:', portfolio['person']['name'])
print('Email:', portfolio['person']['email'])
print('Skills:', portfolio['skills'])

# Save to file
with open('portfolio-data.json', 'w') as f:
    json.dump(portfolio, f, indent=2)
```

---

## Response Headers

```
HTTP/1.1 200 OK
Content-Type: application/json
Transfer-Encoding: chunked
Date: Thu, 05 Mar 2026 12:00:00 GMT
```

---

## Error Responses

### Backend Not Running
```
Error: connect ECONNREFUSED 127.0.0.1:8080
```

### Wrong Endpoint
```json
{
  "timestamp": "2026-03-05T12:00:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "path": "/api/wrong-endpoint"
}
```

### Server Error
```json
{
  "timestamp": "2026-03-05T12:00:00.000+00:00",
  "status": 500,
  "error": "Internal Server Error",
  "path": "/api/portfolio"
}
```

---

## Testing Checklist

- [ ] Backend running in IntelliJ
- [ ] Console shows "Started PortfolioApplication"
- [ ] Health endpoint returns "Portfolio API is running!"
- [ ] Portfolio endpoint returns valid JSON
- [ ] All person data is present
- [ ] Work history array has 3 items
- [ ] Education array has 3 items
- [ ] Skills array has 10 items
- [ ] Freelance projects array has 5 items

---

## Files Included

- `sample-response.json` - Expected JSON response
- `Portfolio-API.postman_collection.json` - Import into Postman
- `test-api.bat` - Windows batch file to test endpoints
- `API_EXAMPLES.md` - This file with all examples

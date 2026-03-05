# Raw JSON Requests for All Endpoints

Complete list of raw JSON request bodies for each API endpoint.

---

## 1. Login (Get Token)

**Endpoint:** `POST /api/auth/login`

**Raw JSON Request:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

---

## 2. Health Check

**Endpoint:** `GET /api/health`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
```
Portfolio API is running!
```

---

## 3. Get All Portfolio Data

**Endpoint:** `GET /api/portfolio`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
```json
{
  "person": { ... },
  "workHistory": [ ... ],
  "education": [ ... ],
  "skills": [ ... ],
  "freelanceProjects": [ ... ]
}
```

---

## 4. Get Personal Information

**Endpoint:** `GET /api/person`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
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

---

## 5. Update Personal Information

**Endpoint:** `POST /api/person`

**Authorization:** Bearer Token Required

**Raw JSON Request:**
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

**Expected Response:** (Echoes back the same JSON)

---

## 6. Get Work Experience

**Endpoint:** `GET /api/work-experience`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
```json
[
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
]
```

---

## 7. Add Work Experience

**Endpoint:** `POST /api/work-experience`

**Authorization:** Bearer Token Required

**Raw JSON Request:**
```json
{
  "company": "Tech Innovations Inc.",
  "location": "Makati, Metro Manila",
  "position": "Senior Software Engineer",
  "dateRange": "January 2026 – Present",
  "responsibilities": [
    "Lead development team of 5 developers",
    "Design and implement microservices architecture using Spring Boot",
    "Code review and mentoring junior developers",
    "Implement CI/CD pipelines with Jenkins and Docker"
  ]
}
```

**Expected Response:** (Echoes back the same JSON)

---

## 8. Get Education

**Endpoint:** `GET /api/education`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
```json
[
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
]
```

---

## 9. Add Education

**Endpoint:** `POST /api/education`

**Authorization:** Bearer Token Required

**Raw JSON Request:**
```json
{
  "institution": "University of the Philippines",
  "course": "Master of Science in Computer Science",
  "dateRange": "2024 – 2026",
  "level": "Graduate"
}
```

**Expected Response:** (Echoes back the same JSON)

---

## 10. Get Skills

**Endpoint:** `GET /api/skills`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
```json
[
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
]
```

---

## 11. Update Skills

**Endpoint:** `POST /api/skills`

**Authorization:** Bearer Token Required

**Raw JSON Request:**
```json
[
  "ASP.Net MVC C#, VB.net, XAML, WPF",
  ".Net Core, Rest APIs, WCF",
  "Java, Spring Boot, Hibernate",
  "C++, Python, Django",
  "JavaScript, React, Node.js, Angular",
  "PHP, Laravel, CodeIgniter",
  "MySQL, MSSQL, PostgreSQL, MongoDB",
  "Android Studio, QT Framework, Flutter",
  "Docker, Kubernetes, AWS, Azure",
  "Git, Github CI/CD, Jenkins",
  "Adobe Photoshop, Illustrator, After Effects",
  "Microsoft Office Suite",
  "PC Troubleshooting, Networking"
]
```

**Expected Response:** (Echoes back the same JSON array)

---

## 12. Get Projects

**Endpoint:** `GET /api/projects`

**Raw JSON Request:** None (GET request)

**Authorization:** Bearer Token Required

**Expected Response:**
```json
[
  "Vidar and Marti-lian Pharmacy Inventory and POS (C#)",
  "Freddie And Lenie Grocery Store Inventory POS (C# & PHP)",
  "Ralphs Joy Restaurant POS System (VB.net)",
  "JSU Trading POS System (VB.net)",
  "Neri Ann's Whole Sale Grocery POS System (C# & PHP)"
]
```

---

## 13. Update Projects

**Endpoint:** `POST /api/projects`

**Authorization:** Bearer Token Required

**Raw JSON Request:**
```json
[
  "E-commerce Platform with Payment Gateway Integration (Spring Boot + React + MySQL)",
  "Mobile Banking Application with Biometric Authentication (Flutter + Firebase)",
  "Hospital Management System with Patient Portal (C# + SQL Server)",
  "Real-time Chat Application with Video Call Feature (Node.js + Socket.io + WebRTC)",
  "Inventory Management System with Barcode Scanner (Java + MySQL)",
  "Vidar and Marti-lian Pharmacy Inventory and POS (C#)",
  "Freddie And Lenie Grocery Store Inventory POS (C# & PHP)",
  "Ralphs Joy Restaurant POS System (VB.net)",
  "JSU Trading POS System (VB.net)",
  "Neri Ann's Whole Sale Grocery POS System (C# & PHP)"
]
```

**Expected Response:** (Echoes back the same JSON array)

---

## Summary Table

| # | Endpoint | Method | Needs Token | Needs JSON Body |
|---|----------|--------|-------------|-----------------|
| 1 | `/api/auth/login` | POST | ❌ No | ✅ Yes |
| 2 | `/api/health` | GET | ✅ Yes | ❌ No |
| 3 | `/api/portfolio` | GET | ✅ Yes | ❌ No |
| 4 | `/api/person` | GET | ✅ Yes | ❌ No |
| 5 | `/api/person` | POST | ✅ Yes | ✅ Yes |
| 6 | `/api/work-experience` | GET | ✅ Yes | ❌ No |
| 7 | `/api/work-experience` | POST | ✅ Yes | ✅ Yes |
| 8 | `/api/education` | GET | ✅ Yes | ❌ No |
| 9 | `/api/education` | POST | ✅ Yes | ✅ Yes |
| 10 | `/api/skills` | GET | ✅ Yes | ❌ No |
| 11 | `/api/skills` | POST | ✅ Yes | ✅ Yes |
| 12 | `/api/projects` | GET | ✅ Yes | ❌ No |
| 13 | `/api/projects` | POST | ✅ Yes | ✅ Yes |

---

## Quick Copy-Paste for Postman

### Login Request Body
```json
{"username":"admin","password":"password123"}
```

### Person Request Body
```json
{"name":"Leonard O. Lalican","email":"leonardorsolinolalican@gmail.com","phone":"09655791871","address":"9003 Reposa Subdivision Purok 5, Yukos, Nagcarlan Laguna","birthDate":"December 28, 1991","objective":"To be involved in work where I can give my abilities, to give my service and enhance my skills to meet company goals and objective with full of integrity and honesty."}
```

### Work Experience Request Body
```json
{"company":"Tech Innovations Inc.","location":"Makati, Metro Manila","position":"Senior Software Engineer","dateRange":"January 2026 – Present","responsibilities":["Lead development team of 5 developers","Design and implement microservices architecture using Spring Boot","Code review and mentoring junior developers","Implement CI/CD pipelines with Jenkins and Docker"]}
```

### Education Request Body
```json
{"institution":"University of the Philippines","course":"Master of Science in Computer Science","dateRange":"2024 – 2026","level":"Graduate"}
```

### Skills Request Body
```json
["ASP.Net MVC C#, VB.net, XAML, WPF",".Net Core, Rest APIs, WCF","Java, Spring Boot, Hibernate","C++, Python, Django","JavaScript, React, Node.js, Angular","PHP, Laravel, CodeIgniter","MySQL, MSSQL, PostgreSQL, MongoDB","Android Studio, QT Framework, Flutter","Docker, Kubernetes, AWS, Azure","Git, Github CI/CD, Jenkins","Adobe Photoshop, Illustrator, After Effects","Microsoft Office Suite","PC Troubleshooting, Networking"]
```

### Projects Request Body
```json
["E-commerce Platform with Payment Gateway Integration (Spring Boot + React + MySQL)","Mobile Banking Application with Biometric Authentication (Flutter + Firebase)","Hospital Management System with Patient Portal (C# + SQL Server)","Real-time Chat Application with Video Call Feature (Node.js + Socket.io + WebRTC)","Inventory Management System with Barcode Scanner (Java + MySQL)","Vidar and Marti-lian Pharmacy Inventory and POS (C#)","Freddie And Lenie Grocery Store Inventory POS (C# & PHP)","Ralphs Joy Restaurant POS System (VB.net)","JSU Trading POS System (VB.net)","Neri Ann's Whole Sale Grocery POS System (C# & PHP)"]
```

---

## Testing Workflow

1. **Login** → Copy token
2. **Test GET endpoints** → Use token in Authorization
3. **Test POST endpoints** → Use token + JSON body

All JSON bodies are ready to copy and paste into Postman!

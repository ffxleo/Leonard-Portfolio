# Portfolio API Endpoints

## Base URL
```
http://localhost:8080/api
```

---

## Endpoints

### 1. Health Check
Check if the API is running

**Endpoint:** `GET /api/health`

**Response:**
```
Portfolio API is running!
```

---

### 2. Get All Portfolio Data
Get complete portfolio information in one request

**Endpoint:** `GET /api/portfolio`

**Response:**
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

### 3. Get Personal Information
Get only personal details

**Endpoint:** `GET /api/person`

**Response:**
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

### 4. Get Work Experience
Get work history only

**Endpoint:** `GET /api/work-experience`

**Response:**
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

### 5. Get Education
Get education history only

**Endpoint:** `GET /api/education`

**Response:**
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

### 6. Get Skills
Get skills list only

**Endpoint:** `GET /api/skills`

**Response:**
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

### 7. Get Projects
Get freelance projects only

**Endpoint:** `GET /api/projects`

**Response:**
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

## Quick Test URLs

Copy and paste these into your browser:

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

## Postman Collection

Import `Portfolio-API.postman_collection.json` to get all endpoints ready to test.

---

## cURL Examples

```bash
# Health Check
curl http://localhost:8080/api/health

# All Data
curl http://localhost:8080/api/portfolio

# Personal Information
curl http://localhost:8080/api/person

# Work Experience
curl http://localhost:8080/api/work-experience

# Education
curl http://localhost:8080/api/education

# Skills
curl http://localhost:8080/api/skills

# Projects
curl http://localhost:8080/api/projects
```

---

## Endpoint Summary

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/portfolio` | GET | Complete portfolio data |
| `/api/person` | GET | Personal information only |
| `/api/work-experience` | GET | Work history only |
| `/api/education` | GET | Education history only |
| `/api/skills` | GET | Skills list only |
| `/api/projects` | GET | Freelance projects only |

---

## Benefits of Separate Endpoints

1. **Flexibility** - Get only the data you need
2. **Performance** - Smaller responses for specific data
3. **RESTful Design** - Follows REST API best practices
4. **Easy Testing** - Test each section independently
5. **Scalability** - Easy to add more endpoints later

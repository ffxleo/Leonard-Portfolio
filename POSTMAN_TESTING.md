# Testing Portfolio API with Postman

This guide shows how to test the Java Spring Boot backend API using Postman.

## Prerequisites

1. Java 17+ installed
2. Maven installed (or use IntelliJ IDEA)
3. Postman installed

## Step 1: Start the Backend

### Option A: Using IntelliJ IDEA (Recommended)

1. Open the project in IntelliJ IDEA
2. Navigate to `src/main/java/com/portfolio/PortfolioApplication.java`
3. Right-click on the file
4. Select "Run 'PortfolioApplication'"
5. Wait for the console to show: "Started PortfolioApplication"

### Option B: Using Maven Command Line

```bash
mvn spring-boot:run
```

### Option C: Using Windows Batch File

```bash
start-backend.bat
```

The backend will start on: `http://localhost:8080`

## Step 2: Test with Postman

### Test 1: Health Check

**Request:**
- Method: `GET`
- URL: `http://localhost:8080/api/health`
- Headers: None required

**Expected Response:**
```
Status: 200 OK
Body: Portfolio API is running!
```

### Test 2: Get Portfolio Data

**Request:**
- Method: `GET`
- URL: `http://localhost:8080/api/portfolio`
- Headers: 
  - `Accept: application/json`

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
    "objective": "To be involved in work where I can give my abilities..."
  },
  "workHistory": [
    {
      "company": "Networld Capital Ventures, Inc. (PJ Lhuillier Group)",
      "location": "156 Jupiter, Makati, Metro Manila",
      "position": "Software Engineer",
      "dateRange": "July 2024 – Present",
      "responsibilities": [
        "Insurely Mobile Application Android and IOS...",
        "Managing Google Playstore and Apple Appstore..."
      ]
    }
    // ... more work history
  ],
  "education": [
    {
      "institution": "Laguna State Polytechnic University",
      "course": "Bachelor of Science in Information Technology",
      "dateRange": "Aug. 2016 – August 2020",
      "level": "College"
    }
    // ... more education
  ],
  "skills": [
    "ASP.Net MVC C#, VB.net, XAML, WPF",
    ".Net Core, Rest APIs, WCF",
    // ... more skills
  ],
  "freelanceProjects": [
    "Vidar and Marti-lian Pharmacy Inventory and POS (C#)",
    // ... more projects
  ]
}
```

## Postman Collection (Import This)

Create a new collection in Postman with these requests:

### Collection: Portfolio API

#### 1. Health Check
```
GET http://localhost:8080/api/health
```

#### 2. Get Portfolio Data
```
GET http://localhost:8080/api/portfolio
Headers:
  Accept: application/json
```

## Troubleshooting

### Backend won't start

**Check Java version:**
```bash
java -version
```
Should be 17 or higher.

**Check if port 8080 is in use:**
```bash
netstat -ano | findstr :8080
```

If port is in use, kill the process:
```bash
taskkill /F /PID <process_id>
```

### 404 Not Found

- Verify the backend is running
- Check the URL is correct: `http://localhost:8080/api/portfolio`
- Look at the backend console for errors

### Connection Refused

- Backend is not running
- Start the backend using one of the methods above

### Empty Response

- Check backend console for errors
- Verify `PortfolioService.java` has data
- Check Spring Boot logs

## Backend Console Output

When the backend starts successfully, you should see:

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.0)

...
Started PortfolioApplication in X.XXX seconds
```

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check endpoint |
| GET | `/api/portfolio` | Get complete portfolio data |

## Next Steps

Once you've tested the API with Postman:

1. The React frontend stays static (no changes needed)
2. The Java backend runs independently
3. You can showcase both:
   - Static React site on GitHub Pages
   - Java REST API running locally for demos

## Benefits of This Approach

- React site works on GitHub Pages (no backend needed)
- Java backend demonstrates your backend skills
- Can be tested independently with Postman
- Shows full-stack capability without deployment complexity
- Easy to demo during interviews

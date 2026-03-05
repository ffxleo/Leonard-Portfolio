# How to Test API in Postman - Step by Step

## Method 1: Import the Collection (Easiest)

### Step 1: Open Postman
- Launch Postman application

### Step 2: Import Collection
1. Click **"Import"** button (top left)
2. Click **"Upload Files"**
3. Select `Portfolio-API.postman_collection.json` from your project folder
4. Click **"Import"**

### Step 3: Test Endpoints
1. You'll see "Portfolio API" collection in the left sidebar
2. Expand it to see all 7 requests
3. Click on any request (e.g., "Get Personal Information")
4. Click the blue **"Send"** button
5. See the response below

---

## Method 2: Create Requests Manually

### Request 1: Health Check

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET** (dropdown on the left)
3. Enter URL: `http://localhost:8080/api/health`
4. Click **"Send"**
5. You should see: `Portfolio API is running!`

---

### Request 2: Get Personal Information

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET**
3. Enter URL: `http://localhost:8080/api/person`
4. Click on **"Headers"** tab
5. Add header:
   - Key: `Accept`
   - Value: `application/json`
6. Click **"Send"**
7. You should see JSON response with personal info

**Expected Response:**
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

### Request 3: Get Work Experience

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET**
3. Enter URL: `http://localhost:8080/api/work-experience`
4. Add header: `Accept: application/json`
5. Click **"Send"**
6. You should see array of work experience

**Expected Response:**
```json
[
  {
    "company": "Networld Capital Ventures, Inc. (PJ Lhuillier Group)",
    "location": "156 Jupiter, Makati, Metro Manila",
    "position": "Software Engineer",
    "dateRange": "July 2024 – Present",
    "responsibilities": [
      "Insurely Mobile Application Android and IOS...",
      "Managing Google Playstore and Apple Appstore..."
    ]
  },
  ...
]
```

---

### Request 4: Get Education

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET**
3. Enter URL: `http://localhost:8080/api/education`
4. Add header: `Accept: application/json`
5. Click **"Send"**

**Expected Response:**
```json
[
  {
    "institution": "Laguna State Polytechnic University",
    "course": "Bachelor of Science in Information Technology",
    "dateRange": "Aug. 2016 – August 2020",
    "level": "College"
  },
  ...
]
```

---

### Request 5: Get Skills

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET**
3. Enter URL: `http://localhost:8080/api/skills`
4. Add header: `Accept: application/json`
5. Click **"Send"**

**Expected Response:**
```json
[
  "ASP.Net MVC C#, VB.net, XAML, WPF",
  ".Net Core, Rest APIs, WCF",
  "Java, C++, Python",
  ...
]
```

---

### Request 6: Get Projects

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET**
3. Enter URL: `http://localhost:8080/api/projects`
4. Add header: `Accept: application/json`
5. Click **"Send"**

**Expected Response:**
```json
[
  "Vidar and Marti-lian Pharmacy Inventory and POS (C#)",
  "Freddie And Lenie Grocery Store Inventory POS (C# & PHP)",
  ...
]
```

---

### Request 7: Get All Portfolio Data

1. Click **"New"** → **"HTTP Request"**
2. Set method to **GET**
3. Enter URL: `http://localhost:8080/api/portfolio`
4. Add header: `Accept: application/json`
5. Click **"Send"**

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

## Postman Interface Guide

```
┌─────────────────────────────────────────────────────────────┐
│  GET ▼  http://localhost:8080/api/person          Send      │
├─────────────────────────────────────────────────────────────┤
│  Params  Authorization  Headers  Body  Pre-request  Tests   │
├─────────────────────────────────────────────────────────────┤
│  Headers (1)                                                 │
│  ┌──────────────┬──────────────────────┬──────────────────┐ │
│  │ KEY          │ VALUE                │ DESCRIPTION      │ │
│  ├──────────────┼──────────────────────┼──────────────────┤ │
│  │ Accept       │ application/json     │                  │ │
│  └──────────────┴──────────────────────┴──────────────────┘ │
└─────────────────────────────────────────────────────────────┘

Response (200 OK)
┌─────────────────────────────────────────────────────────────┐
│  Body  Cookies  Headers  Test Results                       │
├─────────────────────────────────────────────────────────────┤
│  Pretty  Raw  Preview                                        │
├─────────────────────────────────────────────────────────────┤
│  {                                                           │
│    "name": "Leonard O. Lalican",                            │
│    "email": "leonardorsolinolalican@gmail.com",            │
│    "phone": "09655791871",                                  │
│    ...                                                       │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## All Endpoints Quick Reference

| Endpoint | URL |
|----------|-----|
| Health Check | `http://localhost:8080/api/health` |
| All Data | `http://localhost:8080/api/portfolio` |
| Personal Info | `http://localhost:8080/api/person` |
| Work Experience | `http://localhost:8080/api/work-experience` |
| Education | `http://localhost:8080/api/education` |
| Skills | `http://localhost:8080/api/skills` |
| Projects | `http://localhost:8080/api/projects` |

---

## Tips for Postman

### Save Requests
1. After creating a request, click **"Save"**
2. Create a new collection: "Portfolio API"
3. Save all requests in this collection

### Organize Requests
1. Create folders in your collection:
   - "Basic" (health check)
   - "Complete Data" (portfolio)
   - "Individual Sections" (person, work, education, skills, projects)

### View JSON Pretty
1. After sending request, click **"Pretty"** tab
2. Select **"JSON"** from dropdown
3. JSON will be formatted and colored

### Copy Response
1. Click on response body
2. Press `Ctrl+A` to select all
3. Press `Ctrl+C` to copy
4. Paste into a text editor or JSON viewer

---

## Troubleshooting

### "Could not get any response"
- Backend is not running
- Start backend in IntelliJ first

### "404 Not Found"
- Check URL spelling
- Make sure backend is running on port 8080

### "Connection refused"
- Backend is not started
- Check IntelliJ console for errors

### Empty Response
- Check backend console for errors
- Verify endpoint URL is correct

---

## Testing Checklist

Before testing in Postman:
- [ ] Backend is running in IntelliJ
- [ ] Console shows "Started PortfolioApplication"
- [ ] No errors in console

In Postman:
- [ ] Method is set to GET
- [ ] URL is correct (http://localhost:8080/api/...)
- [ ] Header `Accept: application/json` is added
- [ ] Click Send button
- [ ] Response status is 200 OK
- [ ] Response body shows JSON data

---

## Save Your Work

### Export Collection
1. Right-click on "Portfolio API" collection
2. Select **"Export"**
3. Choose **"Collection v2.1"**
4. Save as `Portfolio-API-backup.json`

### Share Collection
1. Export collection (as above)
2. Share the JSON file with team members
3. They can import it into their Postman

---

## Next Steps

Once all endpoints work in Postman:
1. ✅ Your Java backend is working correctly
2. ✅ You can demonstrate REST API skills
3. ✅ Ready for interviews or demos
4. ✅ Can show full-stack capability

The backend doesn't need to be deployed - perfect for local demonstrations!

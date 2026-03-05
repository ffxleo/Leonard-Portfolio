# How to Request Endpoints with JWT Token Authentication

## Overview

All API endpoints require a JWT token in the Authorization header. You must first login to get a token, then use that token for all other requests.

---

## Step 1: Login to Get Token

### Login Request
```
Method: POST
URL: http://localhost:8080/api/auth/login
Headers: Content-Type: application/json
Body: (see below)
```

**Postman Setup:**
1. New Request → **POST**
2. URL: `http://localhost:8080/api/auth/login`
3. Headers tab → Add `Content-Type: application/json`
4. Body tab → raw → JSON
5. Paste:

```json
{
  "username": "admin",
  "password": "password123"
}
```

6. Click **Send**

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

7. **COPY THE TOKEN** - You'll need it for all other requests!

---

## Step 2: Use Token in Other Requests

### Method 1: Using Authorization Tab (Recommended)

**For ANY endpoint:**
1. Create your request (GET or POST)
2. Click **"Authorization"** tab
3. Type: Select **"Bearer Token"**
4. Token: Paste your token (without "Bearer" prefix)
5. Click **Send**

**Example - Get Personal Information:**
```
Method: GET
URL: http://localhost:8080/api/person
Authorization: Bearer Token
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### Method 2: Using Headers Tab

**For ANY endpoint:**
1. Create your request
2. Click **"Headers"** tab
3. Add header:
   - Key: `Authorization`
   - Value: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - (Note: Include "Bearer " before the token)
4. Click **Send**

---

## Complete Workflow Example

### 1. Login First
```
POST http://localhost:8080/api/auth/login

Body:
{
  "username": "admin",
  "password": "password123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

**Copy the token!**

---

### 2. Get Personal Information (with token)
```
GET http://localhost:8080/api/person

Authorization Tab:
  Type: Bearer Token
  Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Response:
{
  "name": "Leonard O. Lalican",
  "email": "leonardorsolinolalican@gmail.com",
  ...
}
```

---

### 3. Get Work Experience (with token)
```
GET http://localhost:8080/api/work-experience

Authorization Tab:
  Type: Bearer Token
  Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Response:
[
  {
    "company": "Networld Capital Ventures, Inc.",
    ...
  }
]
```

---

### 4. Update Personal Information (POST with token)
```
POST http://localhost:8080/api/person

Authorization Tab:
  Type: Bearer Token
  Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Headers:
  Content-Type: application/json

Body:
{
  "name": "Leonard O. Lalican",
  "email": "leonardorsolinolalican@gmail.com",
  ...
}

Response: (echoed data)
```

---

## All Endpoints with Token

| # | Endpoint | Method | Token Required | Body Required |
|---|----------|--------|----------------|---------------|
| 0 | Login | POST | ❌ No | ✅ Yes |
| 1 | Health Check | GET | ✅ Yes | ❌ No |
| 2 | Get All Data | GET | ✅ Yes | ❌ No |
| 3 | Get Person | GET | ✅ Yes | ❌ No |
| 4 | Get Work Experience | GET | ✅ Yes | ❌ No |
| 5 | Get Education | GET | ✅ Yes | ❌ No |
| 6 | Get Skills | GET | ✅ Yes | ❌ No |
| 7 | Get Projects | GET | ✅ Yes | ❌ No |
| 8 | Update Person | POST | ✅ Yes | ✅ Yes |
| 9 | Add Work Experience | POST | ✅ Yes | ✅ Yes |
| 10 | Add Education | POST | ✅ Yes | ✅ Yes |
| 11 | Update Skills | POST | ✅ Yes | ✅ Yes |
| 12 | Update Projects | POST | ✅ Yes | ✅ Yes |

---

## Visual Guide - Postman with Token

### Login Request
```
┌─────────────────────────────────────────────────────────────┐
│  POST ▼  http://localhost:8080/api/auth/login     Send      │
├─────────────────────────────────────────────────────────────┤
│  Headers  Body                                               │
├─────────────────────────────────────────────────────────────┤
│  Body → raw → JSON                                           │
│  {                                                           │
│    "username": "admin",                                      │
│    "password": "password123"                                 │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
👆 COPY THIS TOKEN!
```

### Request with Token (Authorization Tab)
```
┌─────────────────────────────────────────────────────────────┐
│  GET ▼  http://localhost:8080/api/person          Send      │
├─────────────────────────────────────────────────────────────┤
│  Params  Authorization  Headers  Body                        │
├─────────────────────────────────────────────────────────────┤
│  Authorization                                               │
│  Type: Bearer Token ▼                                        │
│  Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...            │
│         👆 PASTE TOKEN HERE                                  │
└─────────────────────────────────────────────────────────────┘
```

### Request with Token (Headers Tab)
```
┌─────────────────────────────────────────────────────────────┐
│  GET ▼  http://localhost:8080/api/person          Send      │
├─────────────────────────────────────────────────────────────┤
│  Params  Authorization  Headers  Body                        │
├─────────────────────────────────────────────────────────────┤
│  Headers                                                     │
│  ┌──────────────────┬──────────────────────────────────────┐│
│  │ KEY              │ VALUE                                ││
│  ├──────────────────┼──────────────────────────────────────┤│
│  │ Authorization    │ Bearer eyJhbGciOiJIUzI1NiIsInR5...  ││
│  │                  │ 👆 Include "Bearer " before token    ││
│  └──────────────────┴──────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

---

## Using Postman Variables (Advanced)

### Save Token as Variable

1. After login, click on response
2. Right-click on token value
3. Select "Set: Portfolio API" → "token"
4. Or manually:
   - Click "Environments" (top right)
   - Create new environment: "Portfolio API"
   - Add variable: `token`
   - Paste token value

### Use Variable in Requests

In Authorization tab:
```
Type: Bearer Token
Token: {{token}}
```

Now you don't need to copy-paste token for each request!

---

## Complete Testing Workflow

### Step-by-Step:

1. **Start Backend**
   - Run PortfolioApplication in IntelliJ
   - Wait for "Started PortfolioApplication"

2. **Login to Get Token**
   - POST to `/api/auth/login`
   - Body: `{"username": "admin", "password": "password123"}`
   - Copy token from response

3. **Test GET Endpoints**
   - GET `/api/person` with token
   - GET `/api/work-experience` with token
   - GET `/api/education` with token
   - GET `/api/skills` with token
   - GET `/api/projects` with token

4. **Test POST Endpoints**
   - POST `/api/person` with token + JSON body
   - POST `/api/work-experience` with token + JSON body
   - POST `/api/education` with token + JSON body
   - POST `/api/skills` with token + JSON body
   - POST `/api/projects` with token + JSON body

---

## Sample Requests with Token

### 1. Login
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password123"}'
```

### 2. Get Person (with token)
```bash
curl -X GET http://localhost:8080/api/person \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 3. Update Person (with token)
```bash
curl -X POST http://localhost:8080/api/person \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
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

---

## Common Errors

### 401 Unauthorized
**Error:** "Unauthorized" or "Invalid token"
**Solution:** 
- Token is missing or invalid
- Login again to get new token
- Check token is copied correctly
- Ensure "Bearer " prefix is included (if using Headers)

### 403 Forbidden
**Error:** "Access Denied"
**Solution:**
- Token is valid but doesn't have permission
- Check user role/permissions

### Token Expired
**Error:** "Token has expired"
**Solution:**
- Login again to get fresh token
- Tokens typically expire after some time

---

## Troubleshooting Checklist

- [ ] Backend is running
- [ ] Successfully logged in
- [ ] Token is copied correctly
- [ ] Token is pasted in Authorization tab OR Headers
- [ ] "Bearer " prefix is included (if using Headers)
- [ ] Token hasn't expired
- [ ] Request URL is correct
- [ ] For POST: Content-Type header is set
- [ ] For POST: Valid JSON in body

---

## Quick Reference

### Login Credentials
```
Username: admin
Password: password123
```

### Login URL
```
POST http://localhost:8080/api/auth/login
```

### Authorization Header Format
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### All Protected Endpoints
```
GET  /api/health
GET  /api/portfolio
GET  /api/person
GET  /api/work-experience
GET  /api/education
GET  /api/skills
GET  /api/projects
POST /api/person
POST /api/work-experience
POST /api/education
POST /api/skills
POST /api/projects
```

---

## Summary

1. **Always login first** to get token
2. **Copy the token** from login response
3. **Add token to every request** using Authorization tab
4. **Use Bearer Token type** in Postman
5. **Token required for ALL endpoints** (except login)

Your API is now secured with JWT authentication!

# JSON Sample Files for API Testing

This folder contains ready-to-use JSON files for testing all API endpoints in Postman.

## Files

| File | Endpoint | Method | Description |
|------|----------|--------|-------------|
| `login.json` | `/api/auth/login` | POST | Login credentials to get JWT token |
| `person.json` | `/api/person` | POST | Personal information |
| `work-experience.json` | `/api/work-experience` | POST | Single work experience entry |
| `education.json` | `/api/education` | POST | Single education entry |
| `skills.json` | `/api/skills` | POST | Array of skills |
| `projects.json` | `/api/projects` | POST | Array of projects |

## How to Use in Postman

### Method 1: Copy and Paste

1. Open the JSON file in a text editor
2. Copy all content (Ctrl+A, Ctrl+C)
3. In Postman:
   - Click **Body** tab
   - Select **raw**
   - Select **JSON** from dropdown
   - Paste the content (Ctrl+V)
4. Click **Send**

### Method 2: Import as File

1. In Postman, click **Body** tab
2. Select **binary**
3. Click **Select File**
4. Choose the JSON file
5. Change back to **raw** and **JSON**
6. Content will be loaded
7. Click **Send**

## Testing Workflow

### Step 1: Login
```
POST http://localhost:8080/api/auth/login
Body: Use login.json
```

Copy the token from response!

### Step 2: Test GET Endpoints (with token)
```
GET http://localhost:8080/api/person
Authorization: Bearer <your-token>
```

### Step 3: Test POST Endpoints (with token + JSON)
```
POST http://localhost:8080/api/person
Authorization: Bearer <your-token>
Body: Use person.json
```

## File Contents

### login.json
```json
{
  "username": "admin",
  "password": "password123"
}
```

### person.json
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

### work-experience.json
```json
{
  "company": "Tech Innovations Inc.",
  "location": "Makati, Metro Manila",
  "position": "Senior Software Engineer",
  "dateRange": "January 2026 – Present",
  "responsibilities": [
    "Lead development team of 5 developers",
    "Design and implement microservices architecture",
    "Code review and mentoring",
    "Implement CI/CD pipelines"
  ]
}
```

### education.json
```json
{
  "institution": "University of the Philippines",
  "course": "Master of Science in Computer Science",
  "dateRange": "2024 – 2026",
  "level": "Graduate"
}
```

### skills.json
```json
[
  "ASP.Net MVC C#, VB.net, XAML, WPF",
  ".Net Core, Rest APIs, WCF",
  "Java, Spring Boot, Hibernate",
  ...
]
```

### projects.json
```json
[
  "E-commerce Platform (Spring Boot + React)",
  "Mobile Banking App (Flutter)",
  "Hospital Management System (C#)",
  ...
]
```

## Customization

Feel free to edit these JSON files to test with different data:

1. Open file in text editor
2. Modify values
3. Save file
4. Use in Postman

## Validation

All JSON files are validated and ready to use. If you modify them:

1. Check syntax at https://jsonlint.com/
2. Ensure all brackets and quotes are matched
3. No trailing commas in arrays/objects

## Quick Test Commands

### Using cURL with JSON files

```bash
# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d @json-samples/login.json

# Update Person (with token)
curl -X POST http://localhost:8080/api/person \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d @json-samples/person.json
```

## Notes

- All JSON files use UTF-8 encoding
- Line endings are normalized
- No BOM (Byte Order Mark)
- Ready for direct use in Postman or cURL

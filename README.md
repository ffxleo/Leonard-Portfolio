# Leonard O. Lalican - Portfolio

Full-stack portfolio website with React frontend and Java Spring Boot backend API.

🌐 **Live Site:** https://ffxleo.github.io/Leonard-Portfolio/

---

## 🚀 Tech Stack

### Frontend
- ReactJS
- CSS3
- HTML5

### Backend (Optional - for local demo)
- Java 17
- Spring Boot 3.2
- JWT Authentication
- Maven

---

## 📋 Quick Start

### View Live Portfolio
Visit: https://ffxleo.github.io/Leonard-Portfolio/

### Run React Frontend Locally
```bash
cd portfolio-react
npm install
npm start
```
Opens at http://localhost:3000

### Run Java Backend API (Optional)
```bash
# Using Maven
mvn spring-boot:run

# Or Windows batch file
start-backend.bat
```
Backend runs on http://localhost:8080

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for complete API guide.

---

## 📁 Project Structure

```
Leonard-Portfolio/
├── portfolio-react/              # React frontend (deployed to GitHub Pages)
│   ├── src/
│   │   ├── components/          # React components
│   │   └── data/                # Static portfolio data
│   └── public/                  # Images and assets
│
├── src/main/java/com/portfolio/ # Java Spring Boot backend
│   ├── controller/              # REST API endpoints
│   ├── model/                   # Data models
│   ├── security/                # JWT authentication
│   └── service/                 # Business logic
│
├── json-samples/                # Sample JSON for API testing
├── pom.xml                      # Maven configuration
└── Portfolio-API.postman_collection.json
```

---

## ✨ Features

### Frontend (React)
- Responsive design for mobile and desktop
- Project galleries with image viewers
- Work experience and education timeline
- Skills showcase
- Freelance projects section

### Backend (Java Spring Boot)
- RESTful API with 12 endpoints
- JWT authentication
- JSON response format
- CORS enabled for testing
- Easy to test with Postman

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | Get JWT token |
| `/api/portfolio` | GET | Get all portfolio data |
| `/api/person` | GET/POST | Personal information |
| `/api/work-experience` | GET/POST | Work history |
| `/api/education` | GET/POST | Education history |
| `/api/skills` | GET/POST | Skills list |
| `/api/projects` | GET/POST | Projects list |

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for details.

---

## 🧪 Testing the API

### 1. Start Backend
```bash
mvn spring-boot:run
```

### 2. Login to Get Token
```bash
POST http://localhost:8080/api/auth/login
Body: {"username":"admin","password":"password123"}
```

### 3. Test Endpoints with Token
```bash
GET http://localhost:8080/api/person
Authorization: Bearer YOUR_TOKEN
```

### Using Postman
1. Import `Portfolio-API.postman_collection.json`
2. Login to get token
3. Use token in Authorization tab for other requests

---

## 🚢 Deployment

### Deploy React to GitHub Pages
```bash
cd portfolio-react
npm run deploy
```

### Backend
The backend is for local demonstration only. It showcases:
- Java Spring Boot skills
- REST API development
- JWT authentication
- Clean architecture

---

## 📚 Documentation

- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Complete API guide
- **[BACKEND_SETUP.md](BACKEND_SETUP.md)** - Backend setup and troubleshooting
- **[INTELLIJ_SETUP.md](INTELLIJ_SETUP.md)** - IntelliJ IDEA configuration
- **[TOKEN_AUTHENTICATION_GUIDE.md](TOKEN_AUTHENTICATION_GUIDE.md)** - JWT authentication
- **[RAW_JSON_REQUESTS.md](RAW_JSON_REQUESTS.md)** - JSON request examples
- **[POSTMAN_WITH_TOKEN.md](POSTMAN_WITH_TOKEN.md)** - Postman testing guide
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick commands reference

---

## 🛠️ Development

### Update Portfolio Data

**Frontend (Static):**
Edit `portfolio-react/src/data/portfolioData.js`

**Backend (API):**
Edit `src/main/java/com/portfolio/service/PortfolioService.java`

### Add New React Component
1. Create in `portfolio-react/src/components/`
2. Import in `portfolio-react/src/App.js`

### Add New API Endpoint
1. Add method in `PortfolioController.java`
2. Implement in `PortfolioService.java`

---

## 💡 Architecture Benefits

**Static React Frontend:**
- Fast loading on GitHub Pages
- No backend dependency
- Easy to deploy and maintain

**Standalone Java Backend:**
- Demonstrates backend skills
- Easy to test with Postman
- Can be shown in interviews
- No deployment complexity

**Separation of Concerns:**
- Frontend and backend are independent
- Each can be updated separately
- Shows full-stack capability

---

## 📧 Contact

- **Email:** leonardorsolinolalican@gmail.com
- **Mobile:** 09655791871
- **GitHub:** https://github.com/ffxleo/Leonard-Portfolio

---

## 📄 License

Personal portfolio project by Leonard O. Lalican

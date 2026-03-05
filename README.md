# Leonard O. Lalican - Portfolio

A full-stack portfolio website showcasing software development projects and experience.

## 🚀 Tech Stack

### Frontend
- ReactJS (Static)
- CSS3
- HTML5

### Backend (Standalone API)
- Java 17
- Spring Boot 3.2
- Maven

## 🎯 Quick Start

### View Live Site (GitHub Pages)
Visit: https://ffxleo.github.io/Leonard-Portfolio/

### Run React Locally

```bash
cd portfolio-react
npm install
npm start
```

Open http://localhost:3000

### Run Java Backend API (Standalone)

The Java backend is a separate REST API that can run independently for testing and demonstration.

#### Using IntelliJ IDEA (Recommended):
1. Open project in IntelliJ
2. Navigate to `src/main/java/com/portfolio/PortfolioApplication.java`
3. Right-click → Run 'PortfolioApplication'
4. Backend runs on http://localhost:8080

#### Using Maven:
```bash
mvn spring-boot:run
```

#### Using Windows Batch File:
```bash
start-backend.bat
```

### Test Backend with Postman

See [POSTMAN_TESTING.md](POSTMAN_TESTING.md) for detailed API testing guide.

**API Endpoints:**
- `GET http://localhost:8080/api/health` - Health check
- `GET http://localhost:8080/api/portfolio` - Get portfolio data (JSON)

## 📁 Project Structure

```
Leonard-Portfolio/
├── src/main/java/com/portfolio/     # Java Spring Boot backend (standalone)
│   ├── PortfolioApplication.java
│   ├── controller/
│   │   └── PortfolioController.java
│   ├── service/
│   │   └── PortfolioService.java
│   └── model/
│       └── PortfolioData.java
├── src/main/resources/
│   └── application.properties
├── portfolio-react/                  # React frontend (static)
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   │   └── portfolioData.js     # Static data
│   │   └── App.js
│   └── public/
├── pom.xml                          # Maven config
├── start-backend.bat                # Windows script to start backend
├── POSTMAN_TESTING.md               # API testing guide
└── BACKEND_SETUP.md                 # Backend setup guide
```

## ✨ Features

### Frontend (React)
- Responsive design for mobile and desktop
- Project galleries with image viewers
- Work experience and education timeline
- Skills showcase
- Freelance projects section
- Deployed on GitHub Pages

### Backend (Java Spring Boot)
- RESTful API architecture
- JSON response format
- CORS enabled for testing
- Standalone operation
- Easy to test with Postman

## 🚢 Deployment

### Deploy React to GitHub Pages

```bash
cd portfolio-react
npm run deploy
```

Wait for "Published" message, then visit:
https://ffxleo.github.io/Leonard-Portfolio/

### Backend Deployment

The backend is designed for local demonstration and testing. It showcases:
- Java Spring Boot skills
- REST API development
- Clean architecture
- JSON data handling

## 🛠️ Development

### Update Portfolio Data

#### For React (Static Site):
Edit `portfolio-react/src/data/portfolioData.js`

#### For Java Backend (API):
Edit `src/main/java/com/portfolio/service/PortfolioService.java`

### Add New React Components

1. Create component in `portfolio-react/src/components/`
2. Import and use in `portfolio-react/src/App.js`

### Add New API Endpoints

1. Add method in `src/main/java/com/portfolio/controller/PortfolioController.java`
2. Implement logic in `src/main/java/com/portfolio/service/PortfolioService.java`

## 🔌 API Documentation

### GET /api/health
Health check endpoint

**Response:**
```
Portfolio API is running!
```

### GET /api/portfolio
Returns complete portfolio data in JSON format

**Response:** JSON object containing:
- `person` - Personal information
- `workHistory` - Work experience array
- `education` - Education history array
- `skills` - Skills array
- `freelanceProjects` - Freelance projects array

## 🐛 Troubleshooting

### React Issues
- **Images not showing**: Use `process.env.PUBLIC_URL + "/image.jpg"`
- **GitHub Pages not updating**: Hard refresh with Ctrl+F5

### Backend Issues
- **Port 8080 in use**: Kill the process or change port in `application.properties`
- **Maven not found**: Use IntelliJ IDEA to run the application
- **404 errors**: Verify backend is running and URL is correct

See [BACKEND_SETUP.md](BACKEND_SETUP.md) for detailed troubleshooting.

## 💡 Architecture Benefits

This architecture provides:

1. **Static React Frontend**
   - Fast loading on GitHub Pages
   - No backend dependency
   - Easy to deploy and maintain

2. **Standalone Java Backend**
   - Demonstrates backend skills
   - Easy to test with Postman
   - Can be shown in interviews
   - No deployment complexity

3. **Separation of Concerns**
   - Frontend and backend are independent
   - Each can be updated separately
   - Shows full-stack capability

## 📄 License

Personal portfolio project by Leonard O. Lalican

## 📧 Contact

- Email: leonardorsolinolalican@gmail.com
- Mobile: 09655791871

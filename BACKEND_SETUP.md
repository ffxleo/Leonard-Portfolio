# Portfolio Backend Setup Guide

This guide explains how to run the Java Spring Boot backend API locally and configure the React frontend to use it.

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Node.js and npm (for React frontend)

## Backend Setup (Java Spring Boot)

### 1. Verify Java Installation

```bash
java -version
```

Should show Java 17 or higher.

### 2. Verify Maven Installation

```bash
mvn -version
```

### 3. Build the Backend

From the project root directory:

```bash
mvn clean install
```

### 4. Run the Backend

```bash
mvn spring-boot:run
```

Or run the compiled JAR:

```bash
java -jar target/portfolio-backend-1.0.0.jar
```

The backend will start on `http://localhost:8080`

### 5. Test the Backend

Open your browser or use curl:

```bash
# Health check
curl http://localhost:8080/api/health

# Get portfolio data
curl http://localhost:8080/api/portfolio
```

## Frontend Setup (React)

### 1. Install Dependencies

```bash
cd portfolio-react
npm install
```

### 2. Configure API Usage

Edit `portfolio-react/src/config.js`:

```javascript
const config = {
  // Set to true to use Java backend API
  USE_API: true,
  
  // API base URL
  API_BASE_URL: 'http://localhost:8080/api'
};
```

### 3. Run React Development Server

```bash
npm start
```

The React app will start on `http://localhost:3000` and fetch data from the Java backend.

## Switching Between API and Static Data

### For Local Development (with Java backend):
Set `USE_API: true` in `portfolio-react/src/config.js`

### For GitHub Pages Deployment:
Set `USE_API: false` in `portfolio-react/src/config.js` before building

## Deployment

### GitHub Pages (Static Data)

1. Set `USE_API: false` in `portfolio-react/src/config.js`
2. Build and deploy:

```bash
cd portfolio-react
npm run deploy
```

### Local Full-Stack Demo

1. Start Java backend: `mvn spring-boot:run`
2. Set `USE_API: true` in `portfolio-react/src/config.js`
3. Start React: `npm start`
4. Open `http://localhost:3000`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/portfolio` - Returns complete portfolio data (JSON)

## Project Structure

```
Leonard-Portfolio/
├── src/main/java/com/portfolio/
│   ├── PortfolioApplication.java      # Spring Boot main class
│   ├── controller/
│   │   └── PortfolioController.java   # REST API endpoints
│   ├── service/
│   │   └── PortfolioService.java      # Business logic
│   └── model/
│       └── PortfolioData.java         # Data models
├── src/main/resources/
│   └── application.properties         # Spring Boot config
├── pom.xml                            # Maven dependencies
└── portfolio-react/
    ├── src/
    │   ├── config.js                  # API configuration
    │   ├── services/
    │   │   └── apiService.js          # API service layer
    │   └── data/
    │       └── portfolioData.js       # Static fallback data
    └── package.json
```

## Troubleshooting

### Backend won't start
- Check if port 8080 is already in use
- Verify Java 17+ is installed
- Check Maven dependencies: `mvn dependency:tree`

### CORS errors in browser
- Verify backend is running on port 8080
- Check CORS configuration in `PortfolioController.java`
- Ensure React dev server is on port 3000

### API returns 404
- Verify backend is running: `curl http://localhost:8080/api/health`
- Check controller mapping paths
- Review Spring Boot logs for errors

### React shows static data instead of API data
- Verify `USE_API: true` in `config.js`
- Check browser console for API errors
- Verify backend is running and accessible

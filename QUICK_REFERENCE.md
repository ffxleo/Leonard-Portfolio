# Quick Reference Guide

## Switching Between Static and API Mode

### For GitHub Pages Deployment (Static Mode)

1. Edit `portfolio-react/src/config.js`:
```javascript
const config = {
  USE_API: false,  // Set to false
  API_BASE_URL: 'http://localhost:8080/api'
};
```

2. Deploy:
```bash
cd portfolio-react
npm run deploy
```

### For Local Full-Stack Demo (API Mode)

1. Edit `portfolio-react/src/config.js`:
```javascript
const config = {
  USE_API: true,  // Set to true
  API_BASE_URL: 'http://localhost:8080/api'
};
```

2. Start backend:
```bash
mvn spring-boot:run
```

3. Start frontend:
```bash
cd portfolio-react
npm start
```

## Common Commands

### Backend (Java)
```bash
# Build
mvn clean install

# Run
mvn spring-boot:run

# Or use Windows batch file
start-backend.bat

# Test API
curl http://localhost:8080/api/health
curl http://localhost:8080/api/portfolio
```

### Frontend (React)
```bash
# Install dependencies
cd portfolio-react
npm install

# Run development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## File Locations

### Configuration
- API config: `portfolio-react/src/config.js`
- Spring Boot config: `src/main/resources/application.properties`
- Maven dependencies: `pom.xml`

### Data Sources
- Static data: `portfolio-react/src/data/portfolioData.js`
- API service: `src/main/java/com/portfolio/service/PortfolioService.java`

### Components
- React components: `portfolio-react/src/components/`
- API service layer: `portfolio-react/src/services/apiService.js`

## Ports

- Java Backend: `http://localhost:8080`
- React Frontend: `http://localhost:3000`
- GitHub Pages: `https://ffxleo.github.io/Leonard-Portfolio/`

## Troubleshooting Quick Fixes

### Backend won't start
```bash
# Check Java version (need 17+)
java -version

# Check if port 8080 is in use
netstat -ano | findstr :8080
```

### React shows old data
```bash
# Clear cache and restart
cd portfolio-react
rm -rf node_modules package-lock.json
npm install
npm start
```

### GitHub Pages not updating
1. Check `USE_API: false` in config.js
2. Wait for "Published" message after deploy
3. Hard refresh browser: Ctrl+F5
4. Check GitHub Actions tab for deployment status

## Data Update Checklist

When updating portfolio data:

### For Static Mode (GitHub Pages):
- [ ] Edit `portfolio-react/src/data/portfolioData.js`
- [ ] Verify `USE_API: false` in config.js
- [ ] Run `npm run deploy`
- [ ] Wait for "Published" message
- [ ] Hard refresh browser

### For API Mode (Local Demo):
- [ ] Edit `src/main/java/com/portfolio/service/PortfolioService.java`
- [ ] Restart backend: `mvn spring-boot:run`
- [ ] Verify `USE_API: true` in config.js
- [ ] Refresh React app

## Testing Checklist

Before deploying:

- [ ] Test locally with static data (`USE_API: false`)
- [ ] Test locally with API (`USE_API: true`)
- [ ] Verify all images load correctly
- [ ] Test responsive design (mobile view)
- [ ] Check all navigation links work
- [ ] Verify gallery images open in modal
- [ ] Test on different browsers
- [ ] Set `USE_API: false` before deploying to GitHub Pages

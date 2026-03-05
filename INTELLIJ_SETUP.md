# IntelliJ IDEA Setup Guide

## Step-by-Step Setup

### Step 1: Import Maven Dependencies

1. Open IntelliJ IDEA
2. Open the `pom.xml` file
3. You should see a notification at the top: "Maven projects need to be imported"
4. Click "Import Changes" or "Enable Auto-Import"
5. Wait for IntelliJ to download all dependencies (this may take a few minutes)

### Step 2: Configure Project SDK

1. Go to `File` → `Project Structure` (or press `Ctrl+Alt+Shift+S`)
2. Under `Project Settings` → `Project`
3. Set `Project SDK` to Java 17 or higher
   - If you don't have Java 17, click `Add SDK` → `Download JDK`
   - Choose version 17 or higher (e.g., Amazon Corretto 17, Eclipse Temurin 17)
4. Set `Language level` to `17 - Sealed types, always-strict floating-point semantics`
5. Click `Apply` and `OK`

### Step 3: Reload Maven Project

1. Open the Maven tool window (View → Tool Windows → Maven)
2. Click the refresh icon (🔄) to reload the project
3. Wait for dependencies to download

### Step 4: Run the Application

1. Navigate to `src/main/java/com/portfolio/PortfolioApplication.java`
2. Right-click on the file
3. Select `Run 'PortfolioApplication.main()'`
4. The application should start on port 8080

### Expected Console Output

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.0)

2024-XX-XX XX:XX:XX.XXX  INFO XXXXX --- [           main] c.p.PortfolioApplication                 : Starting PortfolioApplication
...
2024-XX-XX XX:XX:XX.XXX  INFO XXXXX --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http)
2024-XX-XX XX:XX:XX.XXX  INFO XXXXX --- [           main] c.p.PortfolioApplication                 : Started PortfolioApplication in X.XXX seconds
```

## Common Errors and Solutions

### Error: "Cannot resolve symbol 'SpringApplication'"

**Cause:** Maven dependencies not imported

**Solution:**
1. Open `pom.xml`
2. Right-click in the editor
3. Select `Maven` → `Reload Project`
4. Wait for dependencies to download

### Error: "Project SDK is not defined"

**Cause:** No Java SDK configured

**Solution:**
1. `File` → `Project Structure`
2. `Project` → `Project SDK`
3. Click `Add SDK` → `Download JDK`
4. Choose Java 17 or higher

### Error: "java: error: release version 17 not supported"

**Cause:** Using older Java version

**Solution:**
1. Download Java 17 or higher
2. `File` → `Project Structure` → `Project SDK`
3. Select Java 17

### Error: Port 8080 already in use

**Cause:** Another application is using port 8080

**Solution:**

Option 1 - Kill the process:
```bash
netstat -ano | findstr :8080
taskkill /F /PID <process_id>
```

Option 2 - Change the port:
Edit `src/main/resources/application.properties`:
```properties
server.port=8081
```

### Error: "Cannot find or load main class"

**Cause:** Build output not configured

**Solution:**
1. `Build` → `Rebuild Project`
2. Try running again

## Alternative: Run from Terminal

If IntelliJ continues to have issues, you can run from terminal:

### Option 1: Using Maven Wrapper (if available)
```bash
./mvnw spring-boot:run
```

### Option 2: Using Maven directly
```bash
mvn clean install
mvn spring-boot:run
```

### Option 3: Run the JAR
```bash
mvn clean package
java -jar target/portfolio-backend-1.0.0.jar
```

## Verify It's Working

Once started, test in your browser or Postman:

1. Health check: http://localhost:8080/api/health
2. Portfolio data: http://localhost:8080/api/portfolio

## IntelliJ Tips

### Enable Auto-Import
1. `File` → `Settings` → `Build, Execution, Deployment` → `Build Tools` → `Maven`
2. Check ✓ `Import Maven projects automatically`

### View Maven Dependencies
1. Open Maven tool window: `View` → `Tool Windows` → `Maven`
2. Expand `Dependencies` to see all imported libraries

### Hot Reload (Optional)
Spring Boot DevTools is included in `pom.xml` for automatic restart on code changes.

## Need Help?

If you're still having issues:
1. Copy the exact error message from IntelliJ console
2. Check if Java 17+ is installed: `java -version`
3. Check if Maven is working: `mvn -version`
4. Try `Build` → `Rebuild Project` in IntelliJ

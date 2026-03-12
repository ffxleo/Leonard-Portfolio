# JPA Entity Implementation Guide

## Overview
The portfolio application now uses JPA entities with H2 in-memory database instead of hardcoded data.

## Architecture Changes

### 1. Database Configuration
- **Database**: H2 in-memory database
- **Connection URL**: `jdbc:h2:mem:portfoliodb`
- **Hibernate DDL**: `create-drop` (recreates schema on each startup)
- **H2 Console**: Enabled at `/h2-console` for debugging

### 2. Entity Classes
Created JPA entities in `src/main/java/com/portfolio/entity/`:

#### Person Entity
- Stores personal information (name, email, phone, address, birthDate, objective)
- Single record in database

#### WorkExperience Entity
- Stores work history
- Uses `@ElementCollection` for responsibilities list
- Separate table `work_responsibilities` for responsibilities

#### Education Entity
- Stores educational background
- Fields: institution, course, dateRange, level

#### Skill Entity
- Stores individual skills
- Simple entity with skillName field

#### Project Entity
- Stores freelance projects
- Simple entity with projectName field

### 3. Repository Interfaces
Created Spring Data JPA repositories in `src/main/java/com/portfolio/repository/`:
- `PersonRepository`
- `WorkExperienceRepository`
- `EducationRepository`
- `SkillRepository`
- `ProjectRepository`

All extend `JpaRepository<T, Long>` for CRUD operations.

### 4. Data Initialization
`DataInitializer` class implements `CommandLineRunner`:
- Runs on application startup
- Populates database with portfolio data
- Same data as before, now stored in database

### 5. Service Layer Updates
`PortfolioService` now:
- Injects repository dependencies
- Fetches data from database using repositories
- Converts entities to DTO objects (PortfolioData classes)
- Uses Java Streams for data transformation

## Benefits

1. **Scalability**: Easy to add CRUD endpoints for managing data
2. **Persistence**: Can switch to PostgreSQL/MySQL for production
3. **Standard Practice**: Uses JPA/Hibernate industry standards
4. **Testability**: Can use test databases for unit tests
5. **Flexibility**: Data can be modified without code changes

## Database Schema

### Tables Created:
- `person` - Personal information
- `work_experience` - Work history
- `work_responsibilities` - Work responsibilities (many-to-one)
- `education` - Educational background
- `skills` - Technical skills
- `projects` - Freelance projects

## Future Enhancements

### Possible additions:
1. **CRUD Endpoints**: Add POST/PUT/DELETE endpoints for data management
2. **Admin Panel**: Create admin interface for updating portfolio data
3. **Database Migration**: Switch to PostgreSQL for production
4. **Audit Fields**: Add createdAt, updatedAt timestamps
5. **Soft Delete**: Implement soft delete functionality
6. **Validation**: Add JSR-303 validation annotations
7. **Search**: Add search/filter capabilities

## Testing

### H2 Console Access:
1. Start the application
2. Navigate to: `http://localhost:8080/h2-console`
3. Use connection details:
   - JDBC URL: `jdbc:h2:mem:portfoliodb`
   - Username: `sa`
   - Password: (leave empty)

### Verify Data:
```sql
SELECT * FROM person;
SELECT * FROM work_experience;
SELECT * FROM education;
SELECT * FROM skills;
SELECT * FROM projects;
```

## Dependencies Added

```xml
<!-- Spring Data JPA -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- H2 Database -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

## Configuration Properties

```properties
# H2 Database
spring.datasource.url=jdbc:h2:mem:portfoliodb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

## Migration to Production Database

To switch to PostgreSQL or MySQL:

1. Update `pom.xml` with database driver
2. Update `application.properties` with connection details
3. Change `spring.jpa.hibernate.ddl-auto` to `update` or `validate`
4. Consider using Flyway or Liquibase for migrations

Example for PostgreSQL:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/portfoliodb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

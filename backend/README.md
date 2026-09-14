# YAMORA Backend

This is the Spring Boot backend for the YAMORA curated multi-vendor fashion marketplace.

## Technology Stack
- **Java 17**
- **Spring Boot 3.3.x**
- **Maven** (Dependency Management)
- **PostgreSQL** (Database)

## Architecture Concepts
If you are learning Spring Boot, here is how the pieces fit together:

- **Spring Boot**: A framework that simplifies building Java applications by auto-configuring a lot of the boilerplate code.
- **REST API**: The bridge that allows the React frontend to communicate with this backend via standard HTTP methods (GET, POST).
- **Controller**: The entry point. It receives the HTTP request from React, asks the Service to do the work, and returns the JSON response.
- **Service**: Where the business logic lives. It makes decisions and processes data.
- **Repository**: The layer that talks directly to the PostgreSQL database to save or fetch data.
- **PostgreSQL**: The relational database storing all our sellers, products, customers, and orders securely.

**Data Flow:**
`React Frontend -> Controller -> Service -> Repository -> PostgreSQL`

## Local Development Setup

### 1. Database Configuration
You must have PostgreSQL installed locally. 
Create a database named `yamora_marketplace`.

### 2. Environment Variables
To connect to the database securely, set the following environment variables in your terminal before running the application, or configure them in your IDE's run configuration:
- `DB_USERNAME`: Your PostgreSQL username
- `DB_PASSWORD`: Your PostgreSQL password

*(If these are not set, the application defaults to using `yamora` as the username and password).*

### 3. Running the Application
From this `backend` directory, run:

```bash
mvn spring-boot:run
```
*(Or run `YamoraApplication.java` directly from your IDE).*

### 4. Health Check
Once the application starts, verify it is running by navigating to the health endpoint in your browser or Postman:

**GET** `http://localhost:8080/api/health`

**Expected Response:**
```json
{
  "status": "UP",
  "message": "YAMORA API is running"
}
```

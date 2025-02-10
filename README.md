# **📌 TaskFlow - To-Do List Application**
A simple To-Do List application built with Java Spring Boot (Backend) and React (Frontend).

## 🖥️ Backend Setup (Spring Boot)

### 1️⃣ Install Java & Maven
Ensure Java 17+ and Maven are installed. Check versions:

```
java -version
mvn -version
```

### 2️⃣ Clone the Repository

```
git clone https://github.com/kisarasandes1122/TaskFlow.git
cd taskflow/backend
```

### 3️⃣ Build & Run the Backend

```
mvn spring-boot:run
```
Backend is running at: http://localhost:8080 🚀 <br />

*** 

##  <br />🌐 Frontend Setup (React)
### 1️⃣ Install Node.js

Ensure Node.js 18+ is installed. Check version:
```
node -v
````

### 2️⃣ Install Dependencies
```
cd frontend
npm install
```

### 3️⃣ Start the React App
```
npm run dev
```
Frontend is running at: http://localhost:5173 🎨

##  <br />‼ Important

If the frontend isn't running on **http://localhost:5173** you have to manually allow the CORS Backend/src/main/java/com/taskflow/CorsConfig.java 
```
config.addAllowedOrigin("replace-your-frontend-url");
```

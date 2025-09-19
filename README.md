# Student Registration System

## Overview
This project is a **Student Registration System** that allows users to submit student details (Name, USN, Branch, DOB) through a web form. The data is stored in an **AWS RDS (MySQL)** database, and the submission is handled via an **AWS Lambda function** triggered through **API Gateway**.

---

## Features
- Submit student details via a web form.
- Serverless backend using **AWS Lambda**.
- Persistent storage with **AWS RDS MySQL**.
- API requests logged in **CloudWatch**.
- Easy to extend and deploy.

---
## How I Did It

This section explains the step-by-step process I followed to build the Student Registration System:

### 1. Set Up the Frontend
- Created a **web form** (`registrationForm.html`) with fields: Name, USN, Branch, and DOB.
- Added **JavaScript** to handle form submission and send data as a POST request to the backend API.

### 2. Configure AWS RDS
- Created an **AWS RDS MySQL instance** to store student data.
- Configured the database **security group** to allow connections from the Lambda function.
- Created a database table with columns: `id`, `name`, `email`, `mobile`.

### 3. Develop the Lambda Function
- Created a folder `lambda/` in the project to store Lambda code.
- Wrote the Lambda function (`index.js`) to:
  1. Receive data from API Gateway.
  2. Connect to the RDS database.
  3. Insert student details into the database.
  4. Log request details in **CloudWatch**.
- Added `package.json` and installed necessary Node.js dependencies.

### 4. Connect Lambda to API Gateway
- Created an **API Gateway endpoint**.
- Linked the endpoint to the Lambda function to trigger it on HTTP POST requests.
- Tested the endpoint using **Postman** before connecting it to the frontend.

### 5. Testing the Flow
- Opened `registrationForm.html` in a browser.
- Submitted the form and verified that:
  - Data was inserted into RDS.
  - Lambda logs appeared in **CloudWatch**.
  - Success message displayed on the frontend.
---

## Setup Instructions

### Prerequisites
- Node.js installed
- AWS account with Lambda and RDS access
- MySQL client (optional, for testing)

### Steps
1. Clone the repository:
```bash
git clone https://github.com/Bharath204-coder/student-registration.git
```
2. Install dependencies for Lambda:
3. ```bash
   cd lambda
   npm install
   ```
4.Configure your Lambda function to connect to the RDS database. Update database credentials in index.js
5.Open the frontend/registrationForm.html in a browser and test the form submission.

Author

Bharath C M
GitHub: https://github.com/Bharath204-coder

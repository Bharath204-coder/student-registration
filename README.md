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

## Folder Structure
Student-regi2/
├─ lambda/ # AWS Lambda function code
│ ├─ index.js
│ ├─ package.json
│ └─ package-lock.json
├─ frontend/ # Web form (HTML/CSS/JS)
│ └─ registrationForm.html
├─ README.md
└─ .gitignore


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

uthor

Bharath C M
GitHub: https://github.com/Bharath204-coder

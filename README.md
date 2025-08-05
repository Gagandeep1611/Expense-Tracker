# 💸 Expense Tracker App

A full-stack Expense Tracker web application built with **React**, **Express**, and **MongoDB**. Easily track your income and expenses, categorize transactions, and analyze your spending — all in one place.

## 🚀 Features

- 📊 Add, delete, and view income/expenses
- 🗂️ Categorize transactions (e.g., Food, Travel)
- 🧮 Total balance, income, and expense summary
- 📁 Download income report as Excel
- 🔐 User authentication with JWT
- 🐳 Dockerized for easy container-based deployment

## 🧱 Tech Stack

| Frontend        | Backend           | Database | DevOps               |
|------------------|--------------------|----------|-----------------------|
| React + Vite     | Express + Node.js  | MongoDB  | Docker, GitHub Actions |

## 🧪 Running Locally with Docker

### ⚙️ Environment Variables
Create .env in /backend
```
MONGO_URI= <Your remote db url>
JWT_SECRET= <Your desired secret>
# node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
PORT=8000
```
Make sure you have Docker installed.

### 1️⃣ Clone the repo

``` git clone https://github.com/Gagandeep1611/Expense-Tracker
cd expense-tracker
```
### 2️⃣ Build and run with Docker Compose

docker-compose up frontend-prod

### 📦 Folder Structure
.
├── backend/         # Express API + MongoDB connection
├── frontend/        # React + Vite frontend
├── docker-compose.yml
└── README.md

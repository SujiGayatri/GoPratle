# GoPratle Assignment – Requirement Posting Flow

## 🚀 Project Overview
This project is a multi-step requirement posting flow built as part of the GoPratle Full Stack Developer Internship assignment.

Users can post event requirements and connect with professionals such as planners, performers, and crew.

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)

---

## ✨ Features

- Multi-step form (4 steps)
- Dynamic fields based on hiring type (Planner / Performer / Crew)
- Clean and responsive UI
- Step indicator for better UX
- REST API integration
- MongoDB data storage
- Success confirmation screen after submission

---

## 🧩 How It Works

### Step 1: Event Basics
- Event name, type, date, location, venue
- Select hiring type (Planner / Performer / Crew)

### Step 2 & 3: Dynamic Fields
- Fields change dynamically based on selected category

### Step 4: Review & Submit
- Review entered data
- Submit to backend API

---

## 📡 API Endpoint

POST `/api/requirements`

Stores requirement data in MongoDB.

---

## 📂 Project Structure

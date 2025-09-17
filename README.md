# AI Blog Generator

A **full-stack AI-powered blog generator** built with **React (Vite)** for the frontend and **Node.js + Express** for the backend.  
Users can enter a topic, and the app generates a **1000-word, well-formatted blog** using **Google Gemini API**.

---

## Features
- User-friendly interface with responsive design  
- Accepts a text prompt and generates long-form blogs  
- Uses **Google Gemini API** for AI-generated content  
- Displays a **loading spinner** while generating content  
- Full-stack setup: **React + Vite** (frontend) + **Node.js + Express** (backend)  
- Deployed on **Render (backend)** and **Vercel (frontend)**  

---

## Project Structure

```bash
.
├── backend/
│   ├── server.js          # Express server
│   ├── package.json
│   ├── .env               # Environment variables
│   └── ...
│
├── frontend/
│   ├── src/App.jsx        # React App
│   ├── src/main.jsx
│   └── ...
│
└── README.md
```

---

## ⚙Setup Instructions

### Clone Repository
```bash
git clone https://github.com/ManvithGatty/Blog-Generator.git
cd Blog-Generator
```

---

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
GEMINI_API_KEY=your_google_gemini_api_key
```

Run backend locally:
```bash
node server.js
```

Backend will run on **http://localhost:5000**

---

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run on **http://localhost:5173**

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Axios, CSS
- **Backend:** Node.js, Express
- **AI Model:** Google Gemini API
- **Deployment:** Render (Backend), Vercel (Frontend)

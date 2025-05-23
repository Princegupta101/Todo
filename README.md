# 📝 Todo Summary Assistant

A full-stack application for managing to-do items, summarizing pending tasks using **Cohere's LLM**, and sending summaries to a **Slack** channel. The app features a modern, responsive UI with a summary sidebar, toast notifications, and robust error handling.

---

## 🚀 Features

- ✅ **CRUD Operations**: Add, edit, delete, and toggle completion of todos.
- 🧠 **Summarization**: Use Cohere API to summarize pending todos and send to Slack.
- 🧾 **Summary Sidebar**: Display summaries with spinner and summarize button.
- 🔔 **Toast Notifications**: Success and error messages via `react-hot-toast`.
- 🛡️ **Error Handling**: Validations for API calls and LLM responses.
- 📭 **Empty States**: No todos or summaries? Clear messages shown.
- 📱 **Responsive Design**: Side-by-side on desktop, stacked on mobile.
- 🎨 **Styling**: Tailwind CSS with transitions and shadows.
- 🧮 **Database**: Supabase PostgreSQL with UUIDs.
- 🧹 **Linting**: ESLint (flat config), with prop-types disabled.

---

## 🔧 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, react-hot-toast
- **Backend**: Node.js, Express, Supabase, Cohere API, Axios
- **Database**: Supabase (PostgreSQL)
- **Notifications**: Slack Webhooks
- **Linting**: ESLint (flat config)

---

## 🌐 Demo
https://todo-lilac-alpha-59.vercel.app/
---
 
## SLACK

https://join.slack.com/share/enQtODk0Njg5NTU1MDE3OC0zMDgwMDk5M2IzN2I1YTczYjk1OTkxNzYzZGMzNjc5MTc5ZDExOTBhMTZkZjM2MDg0M2YwYjc1MWExMTcyODdm

## ⚙️ Setup Instructions

### 🔍 Prerequisites

- Node.js (v18+)
- Accounts for:
  - Supabase (DB)
  - Cohere (LLM)
  - Slack (Webhook)

---
## Create .env file from .env.example

```bash
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
COHERE_API_KEY=your_cohere_api_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

## Supabase Table
In Supabase SQL Editor:
```bash
CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
```
## 🧩 Clone the Repository for Frontend

```bash
git clone git@github.com:Princegupta101/Todo.git
```

Install  dependenices

```bash
npm install
```
Run the  react app

```bash
npm run dev
```
## Repository for backend
```bash
cd backend
```
Install  dependenices

```bash
npm install
```
Rrun the server

```bash
npm start
```


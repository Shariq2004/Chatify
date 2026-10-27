# Chatify — Real Time Chat Application

Chatify is a modern, responsive real-time messaging application built with the MERN stack. It allows users to connect, exchange messages and images, manage their profiles, and stay updated through real-time notifications.

## 🌐 Live Demo

- **Live Application:** https://chatify-messenger.vercel.app

> Note: The backend may take a little time to respond if the hosting service is waking up.

## ✨ Features

- **User Authentication** — Secure signup, login, and logout functionality.
- **Real-Time Messaging** — Send and receive messages instantly using Socket.IO.
- **Image Sharing** — Share images directly in conversations.
- **Online Status** — See which users are currently online.
- **Read Receipts** — Track whether your messages have been read.
- **Unread Message Counts** — Keep track of unread messages in your chat list.
- **User Profiles** — Update profile information, profile pictures, bio, phone number, and status.
- **Profile Picture Management** — Upload or delete your profile picture.
- **Notifications** — View notification updates in the application.
- **Sound Settings** — Control notification and keyboard sounds.
- **Light and Dark Themes** — Customize the application's appearance.
- **Responsive Design** — Enjoy the chat experience on desktop, tablet, and mobile devices.
- **Modern UI** — Clean layouts, smooth transitions, and consistent styling.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Zustand
- Axios
- Socket.IO Client
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Socket.IO
- Cloudinary
- Multer

### Deployment
- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database
- Cloudinary — Image Storage


## 🚀 Getting Started

Follow these steps to run Chatify locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Shariq2004/chatify.git
cd chatify
```

### 2. Install Dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory and add your configuration:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Create a `.env` file in the `frontend` directory:

```env
VITE_BACKEND_URL=http://localhost:3000
```

**Important:** Use the exact environment variable names expected by your backend configuration. Never commit real credentials or secret keys to GitHub.

### 4. Start the Backend

From the `backend` directory, run:

```bash
npm run dev
```

The backend should start on `http://localhost:3000`.

### 5. Start the Frontend

Open another terminal and run:

```bash
cd frontend
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

## 🔐 Security

- Authentication uses JWT-based cookies.
- Passwords should be securely hashed before storage.
- Environment variables are used for sensitive configuration.
- Configure CORS to allow only your trusted frontend origins in production.
- Never expose database credentials, JWT secrets, or Cloudinary API secrets in frontend code.

## 📱 Responsive Experience

Chatify is designed to provide a consistent messaging experience across desktop and mobile devices, with responsive navigation, chat layouts, profile views, and settings.

## 👨‍💻 Author

**Shariq Ahmad**

- GitHub: [@Shariq2004](https://github.com/Shariq2004)


---

**Chatify — Connect. Chat. Continue.**
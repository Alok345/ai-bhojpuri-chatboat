# 🗣️🤖 AI Bhojpuri Chatboat

## 🌍 Elevating Bhojpuri Communication with AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Google Generative AI](https://img.shields.io/badge/Google_Generative_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)

---

Welcome to **AI Bhojpuri Chatboat**, an innovative project dedicated to fostering digital communication in the vibrant Bhojpuri language. This application leverages cutting-edge Artificial Intelligence to provide an interactive and engaging chat experience, making AI more accessible and useful for Bhojpuri speakers globally.

Developed by [Alok345](https://github.com/Alok345), this project aims to bridge linguistic gaps and empower communities through technology.

## ✨ Features

The AI Bhojpuri Chatboat offers a rich set of features designed for a seamless and intelligent chat experience:

*   **Bhojpuri Language Support:** Interact with AI in the native Bhojpuri language.
*   **Intelligent AI Responses:** Powered by Google's Generative AI, the chatboat provides contextually relevant and engaging replies.
*   **Real-time Communication:** Experience instant message delivery and AI responses thanks to `Socket.IO`.
*   **Modern User Interface:** Built with Next.js and React for a fast, responsive, and intuitive user experience.
*   **Scalable Backend Integration:** Utilizes Firebase for robust backend services, ensuring secure and efficient data handling.
*   **Session Management:** Persistent user sessions using `js-cookie` for a smooth, uninterrupted experience.
*   **Optimized Performance:** Next.js framework provides server-side rendering and static site generation capabilities for optimal performance.

## 🛠️ Tech Stack

This project is built using a modern and powerful web development stack, combining the best tools for performance, scalability, and developer experience.

### Frontend
*   **[Next.js](https://nextjs.org/)**: A React framework for production, enabling server-side rendering and static site generation.
*   **[React](https://react.dev/)**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
*   **[Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)**: Automatically optimizes and loads local fonts like [Geist](https://vercel.com/font) for improved performance and aesthetics.

### Backend & AI
*   **[Google Generative AI](https://ai.google.dev/)**: The core AI engine providing intelligent, context-aware responses in Bhojpuri.
*   **[Firebase](https://firebase.google.com/)**: Google's comprehensive platform for web and mobile development, likely used for authentication, database (Firestore/Realtime Database), or hosting.

### Real-time Communication
*   **[Socket.IO](https://socket.io/)**: A library that enables real-time, bidirectional, event-based communication between the browser and the server.
*   **[Socket.IO Client](https://socket.io/)**: The client-side library for connecting to the Socket.IO server.

### Utilities
*   **[JS-Cookie](https://github.com/js-cookie/js-cookie)**: A simple, lightweight JavaScript API for handling browser cookies.

## 📂 Project Structure

The repository is thoughtfully organized to ensure clarity, maintainability, and scalability.

```
ai-bhojpuri-chatboat/
├── .gitignore
├── AGENTS.md                 # Documentation or configuration related to AI agents/strategies
├── CLAUDE.md                 # Documentation related to Claude AI integration or exploration
├── README.md                 # You are here!
├── app/                      # Next.js App Router root directory (pages, layouts, routes)
├── components/               # Reusable React components
├── context/                  # React Context API for global state management
├── lib/                      # Utility functions, API clients, Firebase configuration, helpers
├── public/                   # Static assets (images, fonts, favicons)
├── jsconfig.json             # JavaScript configuration for VS Code/TypeScript
├── next.config.mjs           # Next.js configuration file
├── package-lock.json
├── package.json              # Project dependencies and scripts
└── walkthrough.md            # Detailed project walkthrough or usage guide
```

## 🚀 Getting Started

Follow these steps to set up and run the AI Bhojpuri Chatboat locally.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: [LTS version recommended](https://nodejs.org/en/download/)
*   **npm** or **Yarn** or **pnpm** or **Bun**: A package manager (npm comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/Alok345/ai-bhojpuri-chatboat.git
cd ai-bhojpuri-chatboat
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

This project requires environment variables for API keys and configurations, especially for Google Generative AI and Firebase. Create a `.env.local` file in the root directory of the project:

```
# .env.local

# Google Generative AI (Gemini) API Key
# Obtain this from Google AI Studio: https://ai.google.dev/
GOOGLE_GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY

# Firebase Configuration (Example - adjust based on your actual Firebase setup)
# Obtain these from your Firebase project settings (Web app configuration)
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID

# Optionally, if running a separate Socket.IO server
# NEXT_PUBLIC_SOCKET_SERVER_URL=http://localhost:4000
```
**Important:** Replace the placeholder values with your actual API keys and configuration details.

### 4. Run the Development Server

Start the application in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Access the Application

Open your browser and navigate to:

[http://localhost:3000](http://localhost:3000)

The page will auto-update as you make changes to the source code (e.g., `app/page.js`).

## 💬 Usage

Once the application is running, you can:

1.  **Interact with the Chatboat:** Type your messages in Bhojpuri (or any language, though the AI is tuned for Bhojpuri) into the input field and press Enter.
2.  **Receive AI Responses:** The AI Bhojpuri Chatboat, powered by Google Generative AI, will process your input and generate a relevant response in real-time.
3.  **Explore the Interface:** Navigate through the application to discover its features and enjoy the seamless communication.

Refer to `walkthrough.md` for a more detailed guide on using and understanding the application's specific functionalities.

## 📚 Learn More About Next.js

For developers looking to dive deeper into the framework used for this project, here are some excellent resources:

*   **[Next.js Documentation](https://nextjs.org/docs)** – Learn about Next.js features and API.
*   **[Learn Next.js](https://nextjs.org/learn)** – An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) – your feedback and contributions are welcome!

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file (if present, otherwise assumed MIT) for details.

---
© 2024 Alok345. All rights reserved.
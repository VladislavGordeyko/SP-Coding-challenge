# 🏎️ Race Tracker

A **real-time race tracking application** built with **Next.js, TypeScript, SCSS, and GSAP animations**. Participants race with different speeds, and progress is live-updated. The app includes a leaderboard and a responsive sidebar that adapts to desktop and mobile layouts.

---

## 🚀 Features
- **Real-time race tracking** (updates every second)
- **Dynamic participant speeds** (randomized)
- **Live leaderboard** (sorted by completion time)
- **GSAP animations** for smooth movement
- **Responsive UI** (Desktop: sidebar, Mobile: collapsible hamburger menu)
- **LocalStorage Persistence** (Data is saved even after page refresh)
- **API-based architecture** (Next.js API routes for data handling)

---

## 📦 Installation & Setup
### **1️⃣ Clone the repository**
```sh
git clone https://github.com/VladislavGordeyko/SP-Coding-challenge.git
cd race-tracker
```

### **2️⃣ Install dependencies**
```sh
npm install
# or
yarn install
```

### **3️⃣ Start the development server**
```sh
npm run dev
# or
yarn dev
```

Server will run at **`http://localhost:3000`**.

---

## 🏁 How It Works
### **Active Participants Page (`/`)**
- Click **"Add Participant"** to start a new race.
- Each participant moves based on their **random speed**.
- **Live progress updates** ensure a smooth race.
- Once a participant reaches **100% progress**, they are moved to the leaderboard.

### **Leaderboard Page (`/leaderboard`)**
- Shows the **top 10 completed racers** sorted by **fastest time**.
- Click **"Clear"** to reset the leaderboard.

---

## 🎨 UI & Responsive Design
- **Desktop:** Sidebar remains on the left.
- **Mobile:** Sidebar transforms into a top hamburger menu.
- **SCSS with BEM methodology** for styling.

---

## 🛠️ Technologies Used
- **Frontend:** Next.js (React, TypeScript)
- **Styling:** SCSS (BEM structure)
- **Animations:** GSAP (for smooth race animations)
- **Data Handling:** LocalStorage & API routes

---

## 📌 Deployment
### **Deploy on Vercel**
1. Push your project to **GitHub**.
2. Connect your repository to **Vercel**.
3. Deploy with default settings.

OR use:
```sh
vercel
```

---

## 💡 Additional Considerations
### **How to Store the State in the Backend?**
- Store race data using **MongoDB, PostgreSQL, or Redis**.
- Use a **WebSocket server** to maintain a live race state.
- Implement a **REST API with state persistence**.

### **How to Transfer State Changes Between Frontend and Backend?**
- Use **WebSockets** for real-time updates.
- Implement **REST API endpoints** for adding participants and fetching leaderboard data.
- Utilize **Server-Sent Events (SSE)** for continuous progress updates.

### **Were There Steps You Were Unable to Finish?**
- Implementing **persistent race states** on the backend.
- Optimizing the **leaderboard sorting in real-time**.
- Deploying a **WebSocket-based update mechanism**.

### **3 Additional Features to Add**
1. **🏁 Checkered Finish Line Effect** when a participant completes.
2. **🚦 Flashing Lights for the First-Place Racer**.
3. **📊 More Detailed Statistics for Each Race**.

### **How AI Helped in the Process?**
- **Suggested code improvements** and best practices.
- **Debugging assistance** for UI layout and API issues.
- **Generated SCSS styles and layout optimizations**.
- **Recommended technologies for real-time updates**.

---


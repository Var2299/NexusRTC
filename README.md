# 🚀 NexusRTC - Full Stack Realtime Chat Application

NexusRTC is a high-performance, real-time communication platform built using the MERN stack. It features instant messaging, file sharing (images & documents), and live user status updates.



## ✨ Highlights

* **💻 Tech Stack:** MongoDB, Express.js, React.js, Node.js (MERN)
* **⚡ Real-time:** Powered by **Socket.io** for instant message delivery.
* **🎨 Styling:** TailwindCSS & Daisy UI with 30+ built-in themes.
* **🔐 Auth:** Secure Authentication & Authorization with **JWT** and **Cookie-parser**.
* **📂 File Sharing:** Advanced support for Images, PDFs, Word, and PPT files via **Cloudinary**.
* **☁️ State Management:** Lightweight and fast global state handling using **Zustand**.
* **🟢 Live Status:** Real-time online/offline user tracking via Socket.io.
* **🛠️ Error Handling:** Robust error management on both Client (React Hot Toast) and Server.
* **📥 Downloads:** Built-in blob-based download functionality for all shared attachments.

---

## 📸 Screenshots

 ### Welcome Page 
 
 <img width="1918" height="981" alt="image" src="https://github.com/user-attachments/assets/f710bb2a-1d8a-427f-bccd-c3a0ef82c1c8" />
 
 ---

 ### Sidebar & Chat 
 
 <img width="1917" height="973" alt="image" src="https://github.com/user-attachments/assets/5e038244-4563-44f0-8bac-a2cda8181afd" />

 ---

 ### Theme Customization
 
 <img width="1890" height="980" alt="image" src="https://github.com/user-attachments/assets/bf165caf-42d7-491c-8753-f778e6789375" />

 ---

 ### Profile Settings 
 
 <img width="1893" height="977" alt="image" src="https://github.com/user-attachments/assets/894cef27-9031-4714-a77e-5a871ff5f4cb" />|

 ---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/yourusername/NexusRTC.git](https://github.com/yourusername/NexusRTC.git)
cd NexusRTC
```
### 2. Configure Environment Variables (.env)
Create a .env file in the root directory and add your credentials:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```
### 3. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```
### 4. Build & Start the App
```bash
# Build for production
npm run build

# Start the application
npm start
```
## 🚀 Deployment
Set NODE_ENV to production in your hosting environment.

The server is configured to serve the static frontend files from the frontend/dist directory automatically.

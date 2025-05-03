# 🎬 Netflix Clone

A fully responsive Netflix Clone web app built using React and Firebase. It features user authentication (sign up/sign in), dynamic UI with hero banner and movie cards, and a player page for streaming trailers.

## 🚀 Features

- 🔐 **Firebase Authentication** (Sign Up & Sign In)
- 🏠 **Home Page** with:
  - Navigation Bar
  - Hero Banner
  - Title Cards (Popular, Top Picks, Upcoming, Only on Netflix)
  - Scroll interaction on mouse movement
- 🎥 **Player Page** (`/player`):
  - Movie Trailer
  - Title
  - Release Date & Time
- 📱 **Responsive Design** for all screen sizes

## 🛠️ Tech Stack

- React JS
- Firebase (Authentication & Database)
- React Router DOM
- CSS (Responsive Styling)

## 📁 Project Structure



src/

│
├── firebase.js           # Firebase config
├── App.js                # Routing setup
├── index.js              # React DOM entry
│
├── pages/
│   ├── Login.jsx         # Sign In / Sign Up form
│   ├── Home.jsx          # Home page with all sections
│   └── Player.jsx        # Movie trailer player
│
├── components/
│   ├── Navbar.jsx
│   ├── HeroBanner.jsx
│   ├── MovieCard.jsx
│   └── RowScroller.jsx   # Scrollable movie rows

Getting Started
1. Clone the repository
git clone [Clone Repo](https://github.com/kotnibhargavi/Netflix-Clone.git)
cd netflix-clone
2. Install dependencies
npm install
3. Firebase setup
- Go to Firebase Console
- Create a project
- Enable Email/Password Authentication
- Create a Firestore or Realtime Database
- Replace config in firebase.js with your Firebase credentials
4. Start the development server
npm start
Routes
/login - Login & Sign Up page
/home - Main homepage with content
/player - Movie trailer player page
Note
This is a personal project created for learning purposes, inspired by the Netflix UI. Movie data may be static or mocked.


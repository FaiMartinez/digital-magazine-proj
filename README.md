# Digital Magazine

A modern, responsive digital magazine built with React and Firebase.

## Features

- 📱 Responsive design that works on all devices
- 🌓 Light/Dark mode toggle
- 🔥 Real-time article likes using Firebase
- 📝 Clean, modern UI with smooth animations
- 📱 PWA ready

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn
- Firebase account

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-magazine.git
   cd digital-magazine
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the Firebase configuration in `.env` with your Firebase project details

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (if needed)
3. Create a new web app in Firebase
4. Copy the Firebase configuration to your `.env` file
5. Deploy Firebase rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

## Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   firebase init
   ```

4. Deploy to Firebase Hosting:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Styled with modern CSS features (CSS Variables, Flexbox, Grid)

---

Made with ❤️ by Jiro

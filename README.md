# Ampyre Fitness Buddy App

A comprehensive fitness application built with React, Redux, and Firebase that helps users track their fitness progress and connect with fitness buddies.

## Features

### 🏋️ Progress Tracking
- **Monthly Calendar View**: Visual progress tracking with color-coded days
- **Detailed Progress Entry**: Add weight, body fat, measurements, and daily goals
- **Progress History**: View and analyze your fitness journey over time
- **Goal Completion Tracking**: Monitor daily fitness goals (workout, diet, hydration)

### 💬 Messaging System
- **Friend Chat**: Message with your fitness buddies
- **Real-time Messaging**: Instant message delivery using Firebase
- **Conversation Management**: Start new conversations and view chat history
- **Friends List**: Easy access to all your fitness buddies

### 👥 Buddy System
- **Add Friends**: Send and accept friend requests
- **Manage Connections**: View pending requests and manage friendships
- **User Discovery**: Find new fitness buddies based on interests

### 🎯 Workout Management
- **Create Workouts**: Add custom workout routines
- **Track Progress**: Monitor workout completion and performance
- **Workout Types**: Support for strength, cardio, flexibility, and mixed workouts

## Technical Stack

- **Frontend**: React 18 with Redux Toolkit
- **Backend**: Firebase (Firestore, Authentication)
- **Styling**: Tailwind CSS with custom theme support
- **State Management**: Redux with async thunks
- **Real-time Updates**: Firebase Firestore listeners

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ampyre_Fitness_Buddy_App/Ampyre
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project
   - Enable Authentication and Firestore
   - Update `src/firebase.jsx` with your Firebase config

4. Start the development server:
```bash
npm run dev
```

## Firebase Collections

### Users
- `users`: User profiles and information
- `userGoals`: User fitness goals and targets

### Progress
- `progress`: Daily progress entries with metrics and goals

### Social
- `friends`: Accepted friend relationships
- `friendRequests`: Pending friend requests
- `conversations`: Chat conversations between users
- `conversations/{id}/messages`: Messages within conversations

## Usage

### Progress Tracking
1. Navigate to the Progress page
2. Click on any date in the calendar
3. Fill out the progress form with your metrics
4. Set daily goals and mark them as completed
5. View your progress history and trends

### Messaging
1. Go to the Chat page
2. Click the user icon to show your friends list
3. Click on a friend to start a conversation
4. Send messages in real-time
5. View conversation history

### Adding Friends
1. Visit the Buddies page
2. Browse available users
3. Send friend requests
4. Accept incoming requests
5. Start chatting with new friends

## Project Structure

```
src/
├── components/          # Reusable UI components
├── features/           # Redux slices and state management
├── pages/             # Main application pages
├── context/           # React context providers
├── firebase.jsx       # Firebase configuration
└── Store.jsx          # Redux store configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

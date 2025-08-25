# Chat System Troubleshooting Guide

## Common Issues and Solutions

### 1. **Chat System Not Working - General Issues**

#### **Problem**: Chat page loads but no conversations or friends appear
**Solution**: 
- Check browser console for errors
- Verify Firebase connection using the "Test Firebase Connection" button
- Ensure you're logged in (check if `user.uid` exists)

#### **Problem**: Firebase connection errors
**Solution**:
- Check if Firebase config is correct in `src/firebase.jsx`
- Verify Firebase project has Firestore enabled
- Check Firebase security rules

### 2. **Firebase Security Rules**

Make sure your Firestore security rules allow read/write access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow authenticated users to read/write conversations they're part of
    match /conversations/{conversationId} {
      allow read, write: if request.auth != null && 
        request.auth.uid in resource.data.participants;
      
      // Allow access to messages subcollection
      match /messages/{messageId} {
        allow read, write: if request.auth != null && 
          request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants;
      }
    }
    
    // Allow authenticated users to read/write friends data
    match /friends/{friendshipId} {
      allow read, write: if request.auth != null && 
        request.auth.uid in resource.data.participants;
    }
    
    // Allow authenticated users to read/write friend requests
    match /friendRequests/{requestId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == resource.data.fromUserId || 
         request.auth.uid == resource.data.toUserId);
    }
    
    // Allow authenticated users to read other users (for friend discovery)
    match /users/{userId} {
      allow read: if request.auth != null;
    }
  }
}
```

### 3. **Required Firebase Collections**

Ensure these collections exist in your Firestore database:

#### **Users Collection**
```
users/{userId}
{
  uid: "string",
  name: "string",
  email: "string",
  profilePicture: "string (optional)",
  interests: ["array of strings"],
  createdAt: "timestamp"
}
```

#### **Friends Collection**
```
friends/{friendshipId}
{
  participants: ["array of user IDs"],
  status: "accepted",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

#### **Friend Requests Collection**
```
friendRequests/{requestId}
{
  fromUserId: "string",
  toUserId: "string",
  status: "pending|accepted|rejected",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

#### **Conversations Collection**
```
conversations/{conversationId}
{
  participants: ["array of user IDs"],
  createdAt: "timestamp",
  lastMessageAt: "timestamp",
  lastMessage: "string",
  lastSenderId: "string"
}
```

#### **Messages Subcollection**
```
conversations/{conversationId}/messages/{messageId}
{
  senderId: "string",
  content: "string",
  type: "text",
  timestamp: "timestamp",
  read: "boolean"
}
```

### 4. **Testing Steps**

1. **Test Firebase Connection**:
   - Click the "Test Firebase Connection" button
   - Check console for success/error messages

2. **Check Authentication**:
   - Ensure you're logged in
   - Check if `user.uid` exists in Redux state

3. **Check Data Loading**:
   - Open browser console
   - Look for debug logs showing data counts
   - Check for any error messages

4. **Test Friend Creation**:
   - Go to Buddies page
   - Send a friend request to another user
   - Accept the request
   - Check if friend appears in chat

### 5. **Console Debug Information**

The chat system logs detailed information to the console:

```javascript
Chat Debug Info: {
  user: "user-uid",
  conversations: 0,
  currentConversation: null,
  messages: 0,
  friends: 0,
  allUsers: 0,
  status: "idle",
  error: null
}
```

### 6. **Common Error Messages**

- **"Failed to load chat data"**: Firebase connection or permission issues
- **"Failed to create conversation"**: Firebase write permission denied
- **"Failed to send message"**: Firebase write permission denied
- **"No conversations found"**: No conversations exist yet

### 7. **Manual Testing**

1. **Create Test Data**:
   - Manually create a user document in Firestore
   - Create a friendship document
   - Create a conversation document
   - Add a test message

2. **Check Redux State**:
   - Use Redux DevTools to inspect state
   - Verify data is being loaded correctly

### 8. **Performance Issues**

- **Too many real-time listeners**: Check if listeners are being cleaned up
- **Large message history**: Consider pagination for messages
- **Slow loading**: Check Firebase query performance

### 9. **Mobile/Responsive Issues**

- **Chat not working on mobile**: Check viewport and touch events
- **Layout broken**: Verify Tailwind CSS classes

### 10. **Still Not Working?**

If none of the above solutions work:

1. Check browser console for specific error messages
2. Verify Firebase project settings
3. Test with a simple Firebase app to isolate the issue
4. Check if the issue is with the code or Firebase configuration

## Quick Fix Checklist

- [ ] Firebase project created and configured
- [ ] Firestore database enabled
- [ ] Security rules updated
- [ ] User authenticated
- [ ] Required collections exist
- [ ] No console errors
- [ ] Redux state populated
- [ ] Real-time listeners working

Run through this checklist to identify and fix the issue!



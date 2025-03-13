import React from 'react';
import { UserAuthProvider } from './UserAuthContext'; // Import the provider
import AuthButton from './AuthButton'; // Import the AuthButton component
import AuthStatusMessage from './AuthStatusMessage'; // Import the AuthStatusMessage component

const App = () => {
  return (
    <UserAuthProvider>
      <div>
        <h1>User Authentication Example</h1>
        <AuthStatusMessage />
        <AuthButton />
      </div>
    </UserAuthProvider>
  );
};

export default App;
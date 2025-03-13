import React from 'react';
import { useUserAuth } from './UserAuthContext'; // Import the custom hook

const AuthStatusMessage = () => {
  const { isLoggedIn } = useUserAuth();

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <p>You are logged out.</p>
      )}
    </div>
  );
};

export default AuthStatusMessage;
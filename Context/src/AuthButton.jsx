import React from 'react';
import { useUserAuth } from './UserAuthContext'; // Import the custom hook

const AuthButton = () => {
  const { isLoggedIn, login, logout } = useUserAuth();

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
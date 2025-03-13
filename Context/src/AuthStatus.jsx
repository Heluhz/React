import { useAuth } from './UserAuthContext';

const AuthStatus = () => {
    const { isLoggedIn, toggleAuth } = useAuth() || {};
if (isLoggedIn === undefined) {
    return <p>Error: Auth context not available!</p>;
}

 return (
        <div>
            <p>{isLoggedIn ? "You are logged in!" : "You are logged out!"}</p>
            <button onClick={toggleAuth} aria-label={isLoggedIn ? "Logout" : "Login"}>
            </button>

        </div>
    );
};

export default AuthStatus;

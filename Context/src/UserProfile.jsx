import { useAuth } from './UserAuthContext';

const Profile = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <h2>User Profile</h2>
            {isLoggedIn ? (
                <p>Welcome to your profile!</p>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;

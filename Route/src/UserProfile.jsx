import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  return <h2>User Profile - ID: {userId}</h2>;
};

export default UserProfile;

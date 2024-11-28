import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/updateProfile'); // Redirect to the update profile page
    };
    if (!user) {
        return <p>Loading profile...</p>;
    }

    return (
        <div>
            <h1>Welcome, {user?.name || 'Guest'}!</h1>
            <div>
                <img
                    src={user?.image || 'https://via.placeholder.com/150'}
                    alt="Profile"
                />
                <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
                <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
                <button onClick={handleUpdateProfile}>Update Profile</button>
            </div>
        </div>
    );
};

export default Dashboard;
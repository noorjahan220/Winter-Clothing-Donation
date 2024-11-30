import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/updateProfile');
    };

    console.log(user)

    if (!user) {
        return <p className="text-center text-lg font-semibold text-gray-500">Loading profile...</p>;
    }

    return (
        <div className="container mx-auto p-6 m-10">
            <div className="card bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 duration-300">
                <h1 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
                    Welcome, {user?.displayName || 'Guest'}!
                </h1>
                <div className="flex flex-col md:flex-row items-center md:space-x-8 justify-center">
                    {/* Avatar Section */}
                    <div className="avatar mb-6 md:mb-0">
                        <div className="w-32 h-32 rounded-full ring-4 ring-emerald-500 ring-offset-2 ring-offset-base-100 transform transition-all hover:ring-8">
                            <img 
                                src={user?.photoURL || 'default-avatar.jpg'} 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-full" 
                            />
                        </div>
                    </div>

                    {/* Profile Info Section */}
                    <div className="text-center md:text-left mt-4 md:mt-0">
                        <p className="text-xl font-medium text-gray-700 mb-2">
                            <strong>Name:</strong> {user?.displayName || 'N/A'}
                        </p>
                        <p className="text-xl font-medium text-gray-700 mb-4">
                            <strong>Email:</strong> {user?.email || 'N/A'}
                        </p>
                    </div>
                </div>
                {/* Update Profile Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleUpdateProfile}
                        className=" text-black hover:text-white border border-emerald-600 hover:bg-emerald-600 w-full md:w-auto rounded-lg py-2 px-6 transition-all duration-300 transform hover:scale-105"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

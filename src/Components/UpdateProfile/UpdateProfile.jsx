import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        displayName: user?.displayName || '',
        email: user?.email || '',
        photoURL: user?.photoURL || '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, photoURL } = formData;


        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL,
            });
            toast.success("Profile updated successfully!");
            navigate("/dashboard");
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile.");
        }
    };

    return (
        <div className="container mx-auto p-10 m-20">
            <div className="card bg-white shadow-lg rounded-lg p-10 transform transition-all hover:scale-105 duration-300 ">
                <h1 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
                    Update Profile
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center md:space-x-6 justify-center">

                        <div className="avatar mb-6 md:mb-0">
                            <div className="w-32 h-32 rounded-full ring-4 ring-emerald-500 ring-offset-2 ring-offset-base-100 transform transition-all hover:ring-8">
                                <img
                                    src={formData.photoURL || 'https://via.placeholder.com/150'}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>


                        <div className="text-center md:text-left mt-4 md:mt-0 w-full">
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={formData.displayName}
                                    onChange={handleChange}
                                    className="input input-bordered  w-full"
                                    required
                                />
                            </div>
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-medium">Profile Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    value={formData.photoURL}
                                    onChange={handleChange}
                                    className="input input-bordered  w-full"
                                    placeholder="Enter image URL (optional)"
                                />
                            </div>

                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input input-bordered  w-full"
                                    required
                                    disabled
                                />
                            </div>


                        </div>
                    </div>


                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="text-white text-xs font-bold bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto rounded-lg py-2 px-6 transition-all duration-300 transform hover:scale-105"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;

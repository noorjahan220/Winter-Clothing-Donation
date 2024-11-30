import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../../firebase/firebase.init';

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Extract email from state if it's passed from Login page
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent!');
        navigate("/login"); // Redirect back to login page after email sent
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-emerald-600">Reset Your Password</h2>
        <form onSubmit={handlePasswordReset} className="space-y-6">
          <div className="form-control">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full p-4 rounded-md text-gray-700 shadow-md border-emerald-400 focus:ring-emerald-500"
              required
            />
          </div>

          <div className="form-control">
            <button
              type="submit"
              className="btn w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-500 transition duration-300"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Remembered your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-emerald-600 cursor-pointer hover:underline"
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

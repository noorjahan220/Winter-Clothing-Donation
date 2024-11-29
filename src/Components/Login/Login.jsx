import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import logo from '../../assets/Humaaans - Buy Online.png'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        navigate("/");
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email)
        .then(() => toast.success("Password reset email sent!"))
        .catch((error) => toast.error(error.message));
    } else {
      toast.error("Please enter your email to reset the password!");
    }
  };

  return (
    <div className="flex m-10 ">

      <div className="w-1/2 bg-teal-200 flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          "Giving is the greatest act of grace"
        </h1>
        <img
          src={logo}
          alt="Illustration"
          className="w-4/4"
        />
      </div>


      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10 rounded-[16px]">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center mb-8">WELCOME BACK!</h1>

          <form onSubmit={handleLogin} className="space-y-4">

            <div className="form-control">
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="Your email"
                className="input input-bordered w-full"
                required
              />
            </div>


            <div className="form-control relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <p
                onClick={handleForgetPassword}
                className="text-right text-blue-500 text-sm mt-1 cursor-pointer"
              >
                Forgot password?
              </p>
            </div>


            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </div>


            <div className="form-control">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full"
              >
                Sign in with Google
              </button>
            </div>
          </form>


          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

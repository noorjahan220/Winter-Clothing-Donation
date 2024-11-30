import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

  const handleForgetPass = () => {
    navigate("/forget", { state: { email: emailRef.current.value } });
  };

  return (
    <div className="flex lg:flex-row flex-col lg:p-10 mt-4 mb-4 ">
      <div className="lg:w-1/2 bg-teal-200 flex flex-col justify-center items-center p-10 lg:rounded-l-[16px]">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          "Giving is the greatest act of grace"
        </h1>
        <img
          src={logo}
          alt="Illustration"
          className="w-4/4"
        />
      </div>

      <div>
        <div className="lg:w-full bg-white flex flex-col justify-center items-center p-10 lg:rounded-r-[16px]">
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
                  className="absolute right-3 lg:top-2 top-4 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <p
                  onClick={handleForgetPass}
                  className="lg:text-right text-blue-500 text-sm mt-1 cursor-pointer "
                >
                  Forgot password?
                </p>
              </div>

              <div className="form-control">
                <button type="submit" className="btn w-full"
                  style={{ backgroundColor: "#e63946", color: "#fff" }}>
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
              <Link to="/register" className="underline"
               style={{ color: "#e63946" }}>
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

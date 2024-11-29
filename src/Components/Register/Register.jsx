import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    setErrorMessage('');
    setSuccess(false);

    const isValidPassword = password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

    if (!isValidPassword) {
      setErrorMessage('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
      toast.error('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
      return;
    }

    createUser(email, password)
      .then(result => {
        e.target.reset();
        navigate('/');
        setSuccess(true);
        toast.success('Successfully registered!');

        const profile = {
          displayName: name,
          photoURL: photo
        };

        updateProfile(result.user, profile)
          .then(() => {
            e.target.reset();
            navigate('/');
            setSuccess(true);
            toast.success('Successfully registered!');
          })
          .catch(error => {
            toast.error(error.message);
            setErrorMessage(error.message);
            setSuccess(false);
          });
      })
      .catch(error => {
        toast.error(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        navigate('/');
        setSuccess(true);
        toast.success('Successfully registered!');
      })
      .catch(error => {
        toast.error(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="flex lg:flex-row flex-col lg:p-10 mt-4 mb-4">


      <div className="lg:w-1/2 bg-teal-200 flex flex-col justify-center items-center p-10 lg:rounded-l-[16px]">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          "Giving is the greatest act of grace"
        </h1>
        <img
          src="https://i.ibb.co.com/y0H9pDS/Humaaans-1-Character.png"
          alt="Illustration"
          className="w-4/4"
        />
      </div>


      <div>
        <div className="lg:w-full bg-white flex flex-col justify-center items-center p-10 lg:rounded-r-[16px]">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold text-center mb-8">Create a New Account</h1>

            <form onSubmit={handleRegister} className="space-y-4">

              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
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
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn  w-full"
                  style={{ backgroundColor: "#e63946", color: "#fff" }}>
                  Register
                </button>
              </div>

              <div className="form-control">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full"
                >
                  Sign up with Google
                </button>
              </div>
            </form>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className=" underline"
                style={{ color: "#e63946" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

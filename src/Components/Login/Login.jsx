import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";


const Login = () => {
  const [success, setSuccess] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const emailRef = useRef();



  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage('');
    setSuccess(false);

    const isValidPassword = password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

    if (!isValidPassword) {
      setErrorMessage('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
      toast.error('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
      return;
    }

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
        setSuccess(true);
        toast.success('Successfully logged in!');
      })
      .catch(error => {
        console.log('ERROR', error.message);
        toast.error(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
}
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate('/')
        setSuccess(true);
        toast.success('Successfully logged in!');
      })
      .catch(error => {
        console.log('ERROR', error.message)
        toast.error(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      })
  }

  const handleForgetPassword = ()=> {
      const email = emailRef.current.value;
      if(!email){
        console.log('Please provide a valid email address')
      }
      else{
        sendPasswordResetEmail(auth, email)
        .then(()=>{
          PiAlarmThin('Password Reset email sent ,Please check your email')
        })
      }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" ref= {emailRef}placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
              <button 
              onClick={()=> setShowPassword(!showPassword)}
              className="btn absolute right-2 top-12 btn-xs">{
                showPassword ? <FaEyeSlash/> : <FaEye />
              }</button>
              <label onClick={handleForgetPassword}  className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-4 mb-4 mr-4">New to this website? please <Link to="/register">Register</Link></p>
          <p>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
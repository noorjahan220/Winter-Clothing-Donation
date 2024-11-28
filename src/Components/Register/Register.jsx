import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from 'react-hot-toast';



const Register = () => {
  const [success , setSuccess] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
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
    
    console.log(name, password, email);

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset()
        navigate('/')
        setSuccess(true);
        toast.success('Successfully registered!'); 
        
        
      })
      .catch(error => {
        console.log('error', error.message)
        toast.error(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      })

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="ml-4 mb-4 mr-4">Already have an account ? Please<Link to="/login">Login</Link></p>

          
        </div>
      </div>
    </div>
  );
};

export default Register;